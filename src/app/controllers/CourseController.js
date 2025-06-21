const Course = require("../../models/course.model")

class CourseController {

  async show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render("courses/show", {
          course: course
        })
      })
    
  }

}

module.exports = new CourseController;