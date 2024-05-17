module.exports = {
  mutipleMongooseToObject: (mongooses) => {
    return mongooses.map((m) => m.toObject());
  },
  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
