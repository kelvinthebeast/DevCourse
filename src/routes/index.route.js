const newsRoutes = require('./news.route');
const siteRoutes = require('./site.route');
function route(app) {
    app.use('/news', newsRoutes);
    app.use('/', siteRoutes);
}

module.exports = route;
