const express = require('express');
const { select, thumbnail_image_select, create, update, delete_image } = require('../controller/image');
const { carDoesExist, imageDoesExist } = require('../utils/index');

const imageRouter = express.Router();

// Call the select function
imageRouter.get('/:id', select);

// Call the thumbnail select function
imageRouter.get('/:id/thumbnail', thumbnail_image_select);

// Use the middleware to check if the car exists
// Use the middleware to check if images exist
// Call the create funtion 
imageRouter.post('/:id', carDoesExist, imageDoesExist, create);

// Use the middleware to check if the car exists
// Use the middleware to check if images exist
// Call the update funtion 
imageRouter.put('/:id', carDoesExist, imageDoesExist, update);

// Call the delete funtion 
brandRouter.delete('/:id', delete_image);


module.exports = imageRouter;