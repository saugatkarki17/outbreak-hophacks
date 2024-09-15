const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // returns a connection object
    await mongoose.connect(process.env.MONGO_URI);

    
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
