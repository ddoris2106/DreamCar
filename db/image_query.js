const pool = require('./database');
const iterate = require('../utils/index');

// CREATE FUNCTIONS TO QUERY DATABASE
 

// GET FUNCTION
const image_select = (car_id, image_thumbnail) => {
    // Check if user wants just thumbnail image
    if(image_thumbnail === true){
        return pool.query(`SELECT thumbnail FROM car_images WHERE car_id = $1;`, [car_id]);
    }
    // Else select all images for the car
    else{
        return pool.query(`SELECT * FROM car_images WHERE car_id = $1;`, [car_id]);
    }
    
};


// CREATE FUNCTION
const image_create = (image) => {
    ({ car_id } = image);
    ({ thumbnail } = image);
    ({ front } = image);
    ({ right_side } = image);
    ({ left_side } = image);
    ({ back } = image);


    return pool.query(`INSERT INTO car_images VALUES $1, $2, $3, $4, $5, $6;`, [
        car_id,
        thumbnail, 
        front,
        right_side,
        left_side,
        back
    ]);

}


// UPDATE FUNCTION
const image_update = image => {

    const { car_id } = image;
    const columns = Object.keys(image);
    
    const values = iterate(image, "car_id" , columns);
    
    return pool.query(`UPDATE car_images SET ${values.join(", ")} WHERE car_id = $1 RETURNING *;`, [car_id]);
}


// DELETE FUNCTION
const image_delete = car_id => {

    return pool.query(`DELETE FROM car_images WHERE car_id = $1;`, [car_id]);
}


// EXPORT FUNCTIONS
module.exports = image_select;
module.exports = image_create;
module.exports = image_update;
module.exports = image_delete;