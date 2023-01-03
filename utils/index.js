// MIDDLEWARE FUNCTIONS
const { brand_select } = require('../db/brand_query');
const { car_select } = require('../db/car_query');
const { image_select } = require('../db/image_query');

// Check if Brand Exists in database
const brandDoesExist = async(req, res, next) => {

    const brand_id = req.params.id;
    const { brand_name } = req.body;

    try{
        // If it is a post request, make sure the brand does not exist already
        if(req.method === "POST" ){
            // Query the database
            let result = await brand_select(null, brand_name);

            if(result.length !== 0){
                err = new Error(`The brand < ${brand_name} > already exsists!`);
                err.status = 000;
    
                next(err);
            }
        }
        // If it is a put request, make sure the brand already exists
        if (req.method === "PUT") {
            // Query the database
            let result = await brand_select(brand_id, null);

            if(result.length !== 0){
                err = new Error("This brand does not exist!");
                err.status = 000;
    
                next(err);
            }
        }
        else{
            next();
        }
    }
    catch(err){
        errorHandler(err);
    }
}


// Check if Car exists in database
const carDoesExist = async(req, res, next) => {

    const car_id = req.params.id;
    const { car_name } = req.body;

    try{
        
        // If it is a post request, make sure the car does not exist already
        if(req.method === "POST"){
            // Query the database
            let result = await car_select(null, car_name);

            if(result.length !== 0){

                err = new Error(`The car < ${car_name} > already exsists!`);
                err.status = 000;

                next(err);
            }

        }
        // If it is a put request, make sure the car already exists
        if (req.method === "PUT") {

            let result = await car_select(car_id, null);

            if(result.length !== 0){

                err = new Error(`The car < ${car_name} > does not exist!`);
                err.status = 000;
    
                next(err);
            }
        }
        else{
            next();
        }
    }
    catch(err){
        errorHandler(err);
    }
}


// Check if Image exists in database
const imageDoesExist = async(req, res, next) => {

    const car_id = req.params.id;

    try{
        
        // If it is a post request, make sure the image does not exist already
        if(req.method === "POST"){
            // Query the database
            let result = await image_select(car_id, false);

            if(result.length !== 0){

                err = new Error(`The image id < ${image_id} > already exsists!`);
                err.status = 000;

                next(err);
            }

        }
        // If it is a put request, make sure the image already exists
        if (req.method === "PUT") {

            let result = await image_select(car_id, false);

            if(result.length !== 0){

                err = new Error(`The image id < ${image_id} > does not exist!`);
                err.status = 000;
    
                next(err);
            }
        }
        else{
            next();
        }
    }
    catch(err){
        errorHandler(err);
    }
}

// Check if Brand has cars
const brandHasCars = async() => {
    
    let { brand_name } = req.body;
    let brand = brand_name;

    try{
        // Query the database
        let result = await brand_select(brand);
        if(result.length !== 0){
            err = new Error("There are still cars belonging to this brand. All cars under this brand must be deleted before brand can be deleted.");
            // Give the error an appropriate status code
            err.status = 404;

            throw err;
        }

        next();
    }
    catch(err){
        next(err);
    }

}

// Validate Data
// Sample code from tutorial
// exports.fieldValidator = (fields) => {
//     const { title, price, category, essential, created_at } = fields;
//     if (!title || !price || !category || !essential || !created_at) {
//       const emptyFields = [];
//       Object.keys(fields).forEach((field) => {
//         if (fields[field].length <= 0) {
//           emptyFields.push(field);
//         }
//       });

//       return {
//         error: 'All fields are required',
//         emptyFields,
//       };
//     }
//     return null;
// };
  


// Change to sql code
const iterate = (obj, id, columns) => {
    
    const values = [];
    
    // Go through columns and translate to sql
    columns.forEach(column => {
        if(column !== id){
            values.push(`${column} = ${obj[column]}`);
        }
    });

    return values;
}


// Decipher Postgres Error message and create new error
const errorHandler = (err) => {

    // Store all common error types
    const errorType = {
        "03000" : "sql_statement_not_yet_complete",
        "08003" : "connection_does_not_exist",
        "08006" : "connection_failure",
        "22005" : "error_in_assignment",
        "23505" : "unique_violation",
        "23503" : "foreign_key_violation",
        "26000" : "invalid_sql_statement_name",
        "2F002" : "modifying_sql_data_not_permitted",
        "38001" : "containing_sql_not_permitted",
        "42601" : "syntax_error",
        "42000" : "syntax_error_or_access_rule_violation",
        "42830" : "invalid_foreign_key",
        "42602" : "invalid_name",
        "42939" : "reserved_name",
        "42804" : "datatype_mismatch",
        "42P18" : "indeterminate_datatype",
        "42703" : "undefined_column",
        "42883" : "undefined_function",
        "42P01" : "undefined_table",
        "42P02" : "undefined_parameter"
    }

    error_code = errorType[err.code];

    // If it is a known error type
    if(error_code){
        console.log(`Postgres Error Code: ${err_code}. ${error_code}.`);

    }
    else{
        console.log(`Postgres Error Code: ${err_code}. Learn more: https://www.postgresql.org/docs/12/errcodes-appendix.html.`);
    }

    next(err);

}


module.exports = brandDoesExist;
module.exports = carDoesExist;
module.exports = imageDoesExist;
module.exports = brandHasCars;
module.exports = iterate;
module.exports = errorHandler;