const express = require('express');
const {categoryDetails } = require('../controllers/category.controller');
const router = express.Router();

router.get('/', categoryDetails);


module.exports = router;


