const mongoose = require('mongoose');
require('dotenv').config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected to MongoDB!");
  } catch (error) {
    console.log("MongoError:", error);
  } finally {
    await mongoose.disconnect();
    console.log("disconnected");
  }
})();