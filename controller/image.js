const { image_select, image_create, image_update, image_delete } = require("../db/image_query");
const errorHandler = require("../utils");

// Get all images for a specific car
const select = async(req, res, next) => {
    console.log("GET request recieved on IMAGE ROUTER.");
    const car_id = req.params.id;

    try{
        console.log("Searching for all imgaes.")
        let images = await image_select(car_id, false);

        res.status().send(images);
    }
    catch(err){
        errorHandler(err);
    }
}

const thumbnail_image_select = async(req, res, next) => {
    console.log("GET request recieved on IMAGE ROUTER.");
    const car_id = req.params.id;

    try{
        console.log("Searching for thumbnail image.");
        let image = await image_select(car_id, true);

        res.status().send(image);
    }
    catch(err){
        errorHandler(err);
    }

}

const create = async(req, res, next) => {
    console.log("POST request recieved on IMAGE ROUTER.");

    const image = req.body;

    try{
        let newImages = await image_create(image);

        res.status().send(newImages);
    }
    catch(err){
        errorHandler(err);
    }
}


const update = async(req, res, next) => {
    console.log("PUT request recieved on IMAGE ROUTER.");

    const image = req.body;

    // Call the update function
    try{
        let newImages = await image_update(image);
        // let newBrand = await brand_select(brand.brand_name);

        res.status().send(newImages);
    }
    catch(err){
        // if error is thrown, send to error handler
        errorHandler(err);
    }

}


const delete_image = async(req, res, next) => {
    console.log("DELETE request recieved on IMAGE ROUTER.");

    const { car_id } = req.params.id;

    try{
        let response = await image_delete(car_id);

        if(response === 1){
            res.status().send("Images successfully deleted!");
        }
        else{
            let err = new Error("There was a error in deleting these images!")
            err.status = 000;

            next(err);
        }
    }
    catch(err){
        errorHandler(err);
    }
}

module.exports = select;
module.exports = thumbnail_image_select;
module.exports = create;
module.exports = update;
module.exports = delete_image;