const express = require('express');
const { select } = require('../controller/index');

const router = express.Router();

// Call the select function
router.get('/', select);
 

module.exports = router;