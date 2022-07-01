const express = require('express');
const carRouter = express.Router();

carRouter.get('/', (req, res, next) => {
    console.log("GET request recieved on CAR ROUTER.");
})

module.exports = carRouter;