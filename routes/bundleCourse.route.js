const express = require('express');
const { BundleCourseALlDetails, singleCourseDetails } = require('../controllers/bundleCourse.controller');
const router = express.Router();


router.get('/', BundleCourseALlDetails);
router.get('/:id([0-9]+)', singleCourseDetails);




module.exports = router;