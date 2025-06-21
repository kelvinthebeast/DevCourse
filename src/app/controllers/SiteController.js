const Course = require("../../models/course.model.js")
const { multipleMongooseToObject } = require("../../util/mongoose.js")
class SiteController {
    // [GET] /
    home(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', { 
                courses: multipleMongooseToObject(courses)}))
            .catch(next);
        }

    search(req, res) {
        res.render('search', { title: 'Search' });
    }
}

module.exports = new SiteController();
