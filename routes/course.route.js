const express = require('express');
const { CourseAllDetails, SingleCourseDetails } = require('../controllers/course.controller');
const router = express.Router();


router.get('/', CourseAllDetails);
router.get('/:id', SingleCourseDetails);




module.exports = router;