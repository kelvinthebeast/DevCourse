const newsRoutes = require('./news.route');
const siteRoutes = require('./site.route');

const courseRoutes = require("./course.route")
function route(app) {
    app.use('/news', newsRoutes);
    app.use('/', siteRoutes);

    app.use("/courses", courseRoutes)
}

module.exports = route;
