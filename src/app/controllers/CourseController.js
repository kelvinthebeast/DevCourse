const Course = require("../../models/course.model")
const { mongooseToObject } = require("../../util/mongoose")
class CourseController {

  async show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render("courses/show", {
          course: mongooseToObject(course)
        })
      })
      .catch(err => {
        // handle error
    });
    
  }

  create(req, res, next) {
    res.render("courses/create")
  }


  store(req, res, next) {

    // form data
    const formData = req.body
    formData.image =  `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course.save()
      .then(() => res.redirect("/"))
      .catch((err) => console.log(err))

  }
  // [get] /courses/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render("courses/edit", {
        course: mongooseToObject(course)
      }) )
      .catch(next)
    
  }
  // [patch] /courses/:id
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next)
  }
  // [DELTE] /courses/:id/delete 
  destroy(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect(req.get('referer')))
      .catch(next)
  }
}

module.exports = new CourseController;