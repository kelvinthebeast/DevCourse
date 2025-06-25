const Course = require("../../models/course.model")
const { mongooseToObject,multipleMongooseToObject } = require("../../util/mongoose")
class MeController {
  // [Get] /me/stored/courses 
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => res.render("me/stored-courses", {
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next);
    

  }

}

module.exports = new MeController;