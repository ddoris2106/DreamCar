const pool = require('./database');

// CREATE FUNCTIONS TO QUERY DATABASE
 

// GET FUNCTION
const image_select = ({id, thumbnail}) => {
    // If user wants just thumbnail image
    if(thumbnail){
        return pool.query(`SELECT thumbnail FROM car_images WHERE car_id = $1;`, [id]);
    }
    // Else select all images for the car
    else{
        return pool.query(`SELECT * FROM car_images WHERE car_id = $1;`, [id]);
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
// const keys = Object.keys(obj).join(", ");


// DELETE FUNCTION



// EXPORT FUNCTIONS
module.exports = image_select;
module.exports = image_create;