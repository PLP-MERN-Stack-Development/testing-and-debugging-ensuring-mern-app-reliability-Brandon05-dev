const Bug = require('../models/Bug');

// Simple validation helper for unit testing
function validateBugPayload(payload) {
  if (!payload || typeof payload !== 'object') return false;
  if (!payload.title || typeof payload.title !== 'string' || payload.title.trim() === '') return false;
  if (payload.status && !['open', 'in-progress', 'closed'].includes(payload.status)) return false;
  return true;
}

const getAll = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    if (!validateBugPayload(req.body)) {
      return res.status(400).json({ message: 'Invalid bug payload' });
    }
    const bug = new Bug(req.body);
    const saved = await bug.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json(bug);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    if (!validateBugPayload(req.body)) {
      return res.status(400).json({ message: 'Invalid bug payload' });
    }
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json(bug);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateBugPayload,
  getAll,
  create,
  getById,
  update,
  remove
};
