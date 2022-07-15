const express = require('express');
const { select, create, update } = require('../controller/brand');

const brandRouter = express.Router();

brandRouter.get('/', (req, res, next) => {
    // console.log("GET request recieved on BRAND ROUTER.");
})

module.exports = brandRouter;