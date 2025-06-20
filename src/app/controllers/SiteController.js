class SiteController {
    // [GET] /news
    home(req, res) {
        res.render('home', { title: 'Home' });
    }

    search(req, res) {
        res.render('search', { title: 'Search' });
    }
}

module.exports = new SiteController();
