const Course = require("../../models/course.model")
const { mongooseToObject,multipleMongooseToObject } = require("../../util/mongoose")
class MeController {
  // [Get] /me/stored/courses 
  storedCourses(req, res, next) {

    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
          .then(([courses, deletedCount]) =>
            res.render('me/stored-courses', {
              deletedCount,
              courses: multipleMongooseToObject(courses)
            })
          )
  }
  // [get] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => res.render("me/trash-courses", {
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next);
    

  }
}

module.exports = new MeController;
// const Course = require("../../models/course.model");
// const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

// class MeController {
//   // [GET] /me/stored/courses 
//   storedCourses(req, res, next) {
//     Course.find({}) // Lọc ra các course KHÔNG bị xóa
//       .then(courses => {
//         res.render("me/stored-courses", {
//           courses: multipleMongooseToObject(courses)
//         });
//       })
//       .catch(next);
//   }

//   // [GET] /me/trash/courses
//   trashCourses(req, res, next) {
//     Course.find({}) // Chỉ lấy những course đã bị soft delete
//       .then(courses => {
//         res.render("me/trash-courses", {
//           courses: multipleMongooseToObject(courses)
//         });
//       })
//       .catch(next);
//   }
// }

// module.exports = new MeController;
