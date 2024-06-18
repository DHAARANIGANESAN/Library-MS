const mongoose = require('mongoose');

// Set the strictQuery option to prepare for Mongoose 7
mongoose.set('strictQuery', true); // or mongoose.set('strictQuery', false);

function connectDb() {
  const dbUri = "mongodb://localhost:27017"; // Ensure MONGODB_URI is set in your environment variables

  if (!dbUri) {
    console.error('MongoDB URI is not defined');
    process.exit(1); // Exit the process if the URI is not defined
  }

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDb;

