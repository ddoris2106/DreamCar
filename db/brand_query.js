const pool = require('./database');
const iterate = require('../utils/index');

// CREATE FUNCTIONS TO QUERY BRAND TABLE IN DATABASE
 

// GET FUNCTION
const brand_select = (id, name) => {

    // If an id is passed in, select the specific brand
    if(id !== null){
        return pool.query(`SELECT * FROM brand WHERE brand_id = $1;`, [id]);
    }
    // If a name is passed in, select the specific brand -- used in search method
    if(name !== null){
        return pool.query(`SELECT * FROM brand WHERE brand_name = $1;`, [name]);
    }
    // Else select all brands
    else{
        return pool.query(`SELECT * FROM brand;`);
    }
    
};


// CREATE FUNCTION
const brand_create = (brand) => {
    const { brandName } = brand;
    const { logo_address } = brand;

    const columns = Object.keys(brand).join(", ");


    return pool.query(`INSERT INTO brand (${columns}) VALUES $1, $2 RETURNING *;`, [
        brandName,
        logo_address
    ]);

}


// UPDATE FUNCTION
const brand_update = (brand) => {

    const { brand_id } = brand;
    const columns = Object.keys(brand);

    const values = iterate(brand, "brand_id" , columns);


    // columns.forEach(column => {
    //     if(column !== 'brand_id'){
    //         values.push(`${column} = ${brand[column]}`);
    //     }
    // });

    return pool.query(`UPDATE brand SET ${values.join(", ")} WHERE brand_id = $1 RETURNING *;`, [brand_id]);
}


// DELETE FUNCTION
const brand_delete = brand_id => {

    return pool.query(`DELETE FROM brand WHERE brand_id = $1;`, [brand_id]);
}


// EXPORT FUNCTIONS
module.exports = brand_select;
module.exports = brand_create;
module.exports = brand_update;
module.exports = brand_delete;