const newsRoutes = require('./news.route');
const siteRoutes = require('./site.route');
const meRoutes = require("./me.route")
const courseRoutes = require("./course.route")
function route(app) {

    app.use("/me", meRoutes)
    app.use("/courses", courseRoutes)
    app.use('/news', newsRoutes);
    app.use('/', siteRoutes);

    
}

module.exports = route;
