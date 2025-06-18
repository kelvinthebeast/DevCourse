class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news", { title: "News" });
  }
  show(req, res) {

    res.send("News detail page for slug: ");


  }
}

module.exports = new NewsController;