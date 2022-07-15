const express = require('express');
const { select, create } = require('../controller/image');

const imageRouter = express.Router();

imageRouter.get('/', (req, res, next) => {
    console.log("GET request recieved on IMAGE ROUTER.");
})

module.exports = imageRouter;