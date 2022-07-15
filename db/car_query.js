const pool = require('./database');
const iterate = require('../utils/index');

// CREATE FUNCTIONS TO QUERY DATABASE
 

// GET FUNCTION
const car_select = (id) => {
    // If an id is passed in, select the specific car
    if(id){
        return pool.query(`SELECT * FROM car WHERE car_id = $1;`, [id]);
    }
    // Else select all cars
    else{
        return pool.query(`SELECT * FROM car;`);
    }
    
};


// CREATE FUNCTION
const car_create = (car) => {
    ({ brandName } = car);
    ({ carName } = car);
    ({ releaseYear } = car);
    ({ cost } = car);
    ({ bodyType } = car);
    ({ driveTrain } = car);
    ({ engine } = car);
    ({ fuelEconomy } = car);
    ({ cargo } = car);
    ({ depreciation } = car);
    ({ maintenence } = car);

    const columns = Object.keys(car).join(", ");


    return pool.query(`INSERT INTO car (${columns}) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11;`, [
        brandName,
        carName, 
        releaseYear,
        cost,
        bodyType,
        driveTrain,
        engine,
        fuelEconomy,
        cargo,
        depreciation,
        maintenence
    ]);

}


// UPDATE FUNCTION
const car_update = (car) => {

    ({ car_id } = car);
    const columns = Object.keys(car);

    const values = iterate(car, "car_id" , columns);


    // // Go through columns and translate to sql
    // columns.forEach(column => {
    //     if(column !== 'car_id'){
    //         values.push(`${column} = ${car[column]}`);
    //     }
    // });

    return pool.query(`UPDATE car SET ${values.join(", ")} WHERE car_id = $1;`, [car_id]);
}


// DELETE FUNCTION



// EXPORT FUNCTIONS
module.exports = car_select;
module.exports = car_create;
module.exports = car_update;