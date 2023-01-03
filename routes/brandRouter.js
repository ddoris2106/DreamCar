const express = require('express');
const { select, create, update, delete_brand } = require('../controller/brand');
const { brandDoesExist, brandHasCars } = require('../utils/index');

const brandRouter = express.Router();

// Call the select funtion 
brandRouter.get('/', select);

// Use the middleware to check if the brand exists
// Call the create funtion 
brandRouter.post('/', brandDoesExist, create);

// Use the middleware to check if the brand exists
// Call the update funtion 
brandRouter.put('/:id', brandDoesExist, update);

// Use the middleware to check if the brand exists and if it has cars
// Call the delete funtion 
brandRouter.delete('/:id', brandDoesExist, brandHasCars, delete_brand);


// brandRouter.route('/')
//     .get(select)
//     .post(brandDoesExist, create)

// brandRouter.route('/:id')
//     .put(brandDoesExist, update)
//     .delete(brandHasCars);

module.exports = brandRouter;