const mongoose = require("mongoose")

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nhan_education_dev');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("connect failure", error);
    throw error; 
  }
}
module.exports  = { connect }