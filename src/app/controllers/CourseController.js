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
   
    req.body.image =  `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(req.body)
    course.save()
      .then(() => res.redirect("/me/stored/courses"))
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
  // [DELTE] /courses/:id
  destroy(req, res, next) {
    Course.delete({_id: req.params.id})
      .then(() => res.redirect(req.get('referer')))
      .catch(next)
  }
  // [PATCH] /courses/:id/restore 
  restore(req, res, next) {
    Course.restore({_id: req.params.id})
      .then(() => res.redirect("/me/trash/courses"))
      .catch(next);
  }
  // [DELETE] /courses/:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('/me/trash/courses'))
    .catch(next)
  }


  // [post] /courses/handle-form-actions 
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({_id: {$in: req.body.courseIds}})
        .then(() => res.redirect(req.get('referer')))
        .catch(next)
        break;
    
      default:

        res.json({ message: "Action is invalid"})
        break;
    }
  }

}




module.exports = new CourseController;