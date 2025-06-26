const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController.js');
router.get("/stored/courses", MeController.storedCourses)

router.get("/trash/courses", MeController.trashCourses)


// router.get('/', newsController.index);

module.exports = router;
