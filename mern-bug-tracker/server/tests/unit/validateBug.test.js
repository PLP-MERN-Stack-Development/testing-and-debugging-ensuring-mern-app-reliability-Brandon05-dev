const { validateBugPayload } = require('../../src/controllers/bugController');

describe('validateBugPayload', () => {
  test('returns false for empty payloads', () => {
    expect(validateBugPayload(null)).toBe(false);
    expect(validateBugPayload({})).toBe(false);
  });

  test('validates a correct payload', () => {
    const payload = { title: 'Bug 1', description: 'desc', status: 'open' };
    expect(validateBugPayload(payload)).toBe(true);
  });

  test('rejects invalid status', () => {
    const payload = { title: 'Bug', status: 'not-a-status' };
    expect(validateBugPayload(payload)).toBe(false);
  });
});
