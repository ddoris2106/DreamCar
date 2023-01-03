const pool = require('./database');
const iterate = require('../utils/index');

// CREATE FUNCTIONS TO QUERY CAR TABLE IN DATABASE
 

// GET FUNCTION
const car_select = (id, name) => {
    // If an id is passed in, select the specific car
    if(id !== null){
        return pool.query(`SELECT * FROM car WHERE car_id = $1;`, [id]);
    }
    // if a name is passed in, select the specific car -- used in search method
    if(name !== null){
        return pool.query(`SELECT * FROM car WHERE car_name = $1;`, [name]);
    }
    // Else select all cars
    else{
        return pool.query(`SELECT * FROM car;`);
    }
    
};


// CREATE FUNCTION
const car_create = (car) => {
    const { brandName } = car;
    const { carName } = car;
    const { releaseYear } = car;
    const { cost } = car;
    const { bodyType } = car;
    const { driveTrain } = car;
    const { engine } = car;
    const { fuelEconomy } = car;
    const { cargo } = car;
    const { depreciation } = car;
    const { maintenence } = car;

    const columns = Object.keys(car).join(", ");


    return pool.query(`INSERT INTO car (${columns}) VALUES $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 RETURNING *;`, [
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

    const { car_id } = car;
    const columns = Object.keys(car);

    const values = iterate(car, "car_id" , columns);


    // // Go through columns and translate to sql
    // columns.forEach(column => {
    //     if(column !== 'car_id'){
    //         values.push(`${column} = ${car[column]}`);
    //     }
    // });

    return pool.query(`UPDATE car SET ${values.join(", ")} WHERE car_id = $1 RETURNING *;`, [car_id]);
}


// DELETE FUNCTION
const car_delete = car_id => {

    return pool.query(`DELETE FROM brand WHERE car_id = $1;`, [car_id]);
}


// EXPORT FUNCTIONS
module.exports = car_select;
module.exports = car_create;
module.exports = car_update;
module.exports = car_delete;