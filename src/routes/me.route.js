const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController.js');
router.get("/stored/courses", MeController.storedCourses)


// router.get('/', newsController.index);

module.exports = router;
