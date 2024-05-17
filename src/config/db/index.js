const mongoose = require("mongoose");
const MongooseError = mongoose.MongooseError;
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
    console.log("ket noi thanh cong");
  } catch (error) {
    throw new MongooseError("vcc");
  }
};

module.exports = { connect };
