const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../../server/src/index');
const Bug = require('../../../server/src/models/Bug');

jest.setTimeout(60000);

let mongoServer;
let canRun = true;

beforeAll(async () => {
  // create with default options; allow longer time for binary download in CI
  try {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (e) {
    console.warn('MongoMemoryServer failed to start - skipping integration tests in this environment:', e && e.message ? e.message : e);
    canRun = false;
  }
});


afterAll(async () => {
  if (canRun) {
    try {
      await mongoose.disconnect();
    } catch (e) {
      // ignore
    }
    if (mongoServer && typeof mongoServer.stop === 'function') {
      try {
        await mongoServer.stop();
      } catch (e) {
        // ignore stop errors
      }
    }
  }
});

afterEach(async () => {
  if (canRun) await Bug.deleteMany();
});

describe('Bug routes', () => {
  test('creates, updates, and deletes a bug', async () => {
    if (!canRun) {
      console.warn('Skipping integration test because MongoMemoryServer could not start in this environment');
      return;
    }
    // create
    const createRes = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test bug', description: 'desc' })
      .expect(201);

    expect(createRes.body).toHaveProperty('_id');
    const id = createRes.body._id;

    // update
    const updateRes = await request(app)
      .put(`/api/bugs/${id}`)
      .send({ title: 'Updated', description: 'new', status: 'in-progress' })
      .expect(200);

    expect(updateRes.body.title).toBe('Updated');

    // delete
    await request(app).delete(`/api/bugs/${id}`).expect(200);
    const found = await Bug.findById(id);
    expect(found).toBeNull();
  });
});
