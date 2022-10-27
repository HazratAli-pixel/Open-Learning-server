const express = require('express');
const router = express.Router();
const { BundleCourseALlDetails, singleCourseDetails } = require('../controllers/bundleCourse.controller');


router.get('/', BundleCourseALlDetails);
router.get('/:id', singleCourseDetails);




module.exports = router;