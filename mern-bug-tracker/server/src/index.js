const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bugRoutes = require('./routes/bugRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugRoutes);

// Health
app.get('/health', (req, res) => res.json({ ok: true }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern-bug-tracker';

if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error('MongoDB connection error', err);
      process.exit(1);
    });
}

module.exports = app; // exported for testing
