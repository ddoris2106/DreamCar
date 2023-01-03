const { brand_select, brand_create, brand_update, brand_delete } = require("../db/brand_query");
const { errorHandler } = require('../utils/index');

const select = async(req, res, next) => {
    console.log("GET request recieved on BRAND ROUTER.");

    brand_name = req.query.brand_name;
    brand_id = req.query.brand_id;

    // If select is called with a specific brand id...
    if(brand_id !== null){
        console.log("Brand ID Recieved! Searching based on id.");

        // Call the select function
        try{
            const brand = await brand_select(brand_id, null);

            res.status().send(brand);
        }
        catch(err){
            errorHandler(err);
        }
    }

    // If select is called with a specific brand name...
    if(brand_name !== null){
        console.log("Brand Name Recieved! Searching based on name.");

        // Call the select function
        try{
            const brand = await brand_select(null, brand_name);

            res.status().send(brand);
        }
        catch(err){
            errorHandler(err);
        }
    }
    // Else if there is no brand name or id specified
    else{
        console.log("No Brand Name Detected! Searching generally.");

        try{
            const brands = await brand_select();

            res.status().send(brands);
        }
        catch(err){
            // if error is thrown, send to error handler
            errorHandler(err);
        }
    }
}

const create = async(req, res, next) => {
    console.log("POST request recieved on BRAND ROUTER.");

    const brand = req.body;

    // Call the create function8
    try{
        let newBrand = await brand_create(brand);
        //  = await brand_select(brand.brand_name);

        // Send a status code of with the created resource
        res.status().send(newBrand);
    }
    catch(err){
        // if error is thrown, send to error handler
        errorHandler(err);
    }

}

const update = async(req, res, next) => {
    console.log("PUT request recieved on BRAND ROUTER.");

    const brand = req.body;

    // Call the update function
    try{
        let newBrand = await brand_update(brand);
        // let newBrand = await brand_select(brand.brand_name);

        res.status().send(newBrand);
    }
    catch(err){
        // if error is thrown, send to error handler
        errorHandler(err);
    }
    
}


const delete_brand = async(req, res, next) => {
    console.log("DELETE request recieved on BRAND ROUTER");

    const { brand_id } = req.params.id;

    try{
        let response = await brand_delete(brand_id);

        if(response === 1){
            res.status().send("Brand successfully deleted!");
        }
        else{
            let err = new Error("There was a error in deleting this brand!")
            err.status = 000;

            next(err);
        }
    }
    catch(err){
        errorHandler(err);
    }

}


module.exports = select;
module.exports = create;
module.exports = update;
module.exports = delete_brand;