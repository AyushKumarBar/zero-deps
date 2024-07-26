const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    mongoose.connection.close(); // Close connection after testing
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
