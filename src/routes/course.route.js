const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController.js');
router.get("/create", CourseController.create)

router.post("/store", CourseController.store)
router.get("/:id/edit", CourseController.edit)
router.patch("/:id", CourseController.update)

router.get('/:slug', CourseController.show);
// router.get('/', newsController.index);

module.exports = router;
