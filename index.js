const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', jobRoutes);

// Database connection
mongoose.connect('mongodb://localhost:27017/jobdb')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.log('Failed to connect to the database', err);
  });

// Start the server
const PORT = 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
