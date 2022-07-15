const { brand_select, brand_create, brand_update } = require("../db/brand_query");
const { errorHandler } = require('../utils/index');

const select = async(req, res) => {
    console.log("GET request recieved on BRAND ROUTER.");

    brand_name = req.params.name;

    if(brand_name){
        console.log("Brand Name Recieved! Searching based on name.");

        // Call
        try{
            const brands = await brand_select(brand_name);

            res.status().send(brands);
        }
        catch(err){
            // if error is thrown, attach status code?
            errorHandler(err);
            next(err);
        }
    }
    else{
        console.log("No Brand Name Detected! Searching generally.");

        try{
            const brands = await brand_select();

            res.status().send(brands);
        }
        catch(err){
            // if error is thrown, attach status code?
            errorHandler(err);
            next(err);
        }
    }
}

const create = async(req, res) => {
    console.log("POST request recieved on BRAND ROUTER.");
}

const update = async(req, res) => {
    console.log("PUT request recieved on BRAND ROUTER.");
}

module.exports = select;
module.exports = create;
module.exports = update;