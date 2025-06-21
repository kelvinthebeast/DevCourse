const Course = require("../../models/course.model.js")
const { multipleMongooseToObject } = require("../../util/mongoose.js")
class SiteController {
    // [GET] /
    async home(req, res, next) {
        // Course.find({})
        //     .then(courses => res.render('home', { 
        //         courses: multipleMongooseToObject(courses)}))
                
        //     .catch(next);

        const courses = await Course.find({})
        res.render("home", {
            courses: multipleMongooseToObject(courses)
        })
        }

    

    search(req, res) {
        res.render('search', { title: 'Search' });
    }
}

module.exports = new SiteController();
