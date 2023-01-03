const express = require('express');
const { select, create, update, delete_car } = require('../controller/car/js');
const { carDoesExist } = require('../utils/index');

const carRouter = express.Router();

// Call the select funtion 
carRouter.get('/', select);

// Use the middleware to check if the car exists
// Call the create funtion 
carRouter.post('/', carDoesExist, create);

// Use the middleware to check if the car exists
// Call the update funtion 
carRouter.put('/:id', carDoesExist, update);

// Call the delete funtion 
carRouter.delete('/:id', delete_car);

module.exports = carRouter;