const { car_select, car_create, car_update, car_delete } = require("../db/car_query");
const errorHandler = require("../utils");

// CALLL DATABSE FUNCTIONSS

const select = async(req, res) => {

    console.log("GET request recieved on CAR ROUTER.");

    car_name = req.query.car_name;
    car_id = req.query.car_id;


    if(car_id !== null){
        try {
            let response = await car_select(car_id, null);
    
            res.status().send(response);
        }
        catch(err){
            errorHandler(err);
        }
    }

    if(car_name !== null){
        
        try {
            let response = await car_select(null, car_name);
    
            res.status().send(response);
        }
        catch(err){
            errorHandler(err);
        }
    }


}

const create = async(req, res) => {
    console.log("POST request recieved on CAR ROUTER.");

    const car = req.body;

    // Call the create function
    try{
        let newCar = await car_create(car);
        //  = await car_select(car.car_id);

        // Send a status code of with the created resource
        res.status().send(newCar);
    }
    catch(err){
        // if error is thrown, send to error handler
        errorHandler(err);
    }
}

const update = async(req, res) => {
    console.log("PUT request recieved on CAR ROUTER.");

    const car = req.body;

    // Call the update function
    try{
        let newCar = await car_update(car);

        res.status().send(newCar);
    }
    catch(err){
        errorHandler(err);
    }

}

const delete_car = async(req, res) => {
    console.log("DELETE request recieved on CAR ROUTER");

    const { car_id } = req.params.id;

    try{
        let response = await car_delete(car_id);

        if(response === 1){
            res.status().send("Car successfully deleted!");
        }
        else{
            let err = new Error("There was a error in deleting this car!")
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
module.exports = delete_car;