const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("GET request recieved on DEFAULT ROUTER.");
})

module.exports = router;