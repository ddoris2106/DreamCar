const pool = require('./database');
const iterate = require('../utils/index');

// CREATE FUNCTIONS TO QUERY DATABASE
 

// GET FUNCTION
const brand_select = (name) => {
    // If an id is passed in, select the specific car
    if(name){
        return pool.query(`SELECT * FROM brand WHERE car_id = $1;`, [name]);
    }
    // Else select all cars
    else{
        return pool.query(`SELECT * FROM brand;`);
    }
    
};


// CREATE FUNCTION
const brand_create = (brand) => {
    ({ brandName } = brand);
    ({ logo_address } = brand);

    const columns = Object.keys(brand).join(", ");


    return pool.query(`INSERT INTO brand (${columns}) VALUES $1, $2;`, [
        brandName,
        logo_address
    ]);

}


// UPDATE FUNCTION
const brand_update = (brand) => {

    ({ brand_id } = brand);
    const columns = Object.keys(brand);

    const values = iterate(brand, "brand_id" , columns);


    // columns.forEach(column => {
    //     if(column !== 'brand_id'){
    //         values.push(`${column} = ${brand[column]}`);
    //     }
    // });

    return pool.query(`UPDATE brand SET ${values.join(", ")} WHERE brand_id = $1;`, [brand_id]);
}


// DELETE FUNCTION



// EXPORT FUNCTIONS
module.exports = brand_select;
module.exports = brand_create;
module.exports = brand_update;