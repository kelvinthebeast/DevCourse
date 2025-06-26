const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController.js');
router.get("/create", CourseController.create)
router.post("/store", CourseController.store)
router.get("/:id/edit", CourseController.edit)
router.patch("/:id", CourseController.update) 
router.patch("/:id/restore", CourseController.restore)
router.delete("/:id", CourseController.destroy)
router.delete("/:id/force", CourseController.forceDestroy)
router.get('/:slug', CourseController.show);
// router.get('/', newsController.index);

module.exports = router;
