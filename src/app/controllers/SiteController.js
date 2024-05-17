const Course = require("../models/Course");
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");

class SiteController {
  // [GET] /home
  async home(req, res, next) {
    try {
      const courses = await Course.find({});

      res.render("home", { courses: mutipleMongooseToObject(courses) });
    } catch (err) {
      res.status(500).send(err.message);
    }
    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
