class NewsController {
  // [GET]
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:blog
  show(req, res) {
    res.send("New Blog");
  }
}

module.exports = new NewsController();
