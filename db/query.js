const pool = require('./database');

// CREATE FUNCTIONS TO QUERY DATABASE

// GET FUNCTION
const general_select = (filter_params) => {
    // Load filter parameters
    ({ brandName } = filter_params);
    ({ carName } = filter_params);
    ({ releaseYear } = filter_params);
    ({ cost } = filter_params);
    ({ bodyType } = filter_params);
    ({ driveTrain } = filter_params);
    ({ engine } = filter_params);
    ({ fuelEconomy } = filter_params);
    ({ cargo } = filter_params);
    ({ depreciation } = filter_params);
    ({ maintenence } = filter_params);

    const params = [];

    // If a filter parameter exists, add it to the array of parameters 
    if (brandName) { params.push(`brandName = ${brandName}`); }
    if (carName) { params.push(`carName = ${carName}`); }
    if (releaseYear) { params.push(`releaseYear = ${releaseYear}`); }
    if (cost) { params.push(`cost = ${cost}`); }
    if (bodyType) { params.push(`bodyType = ${bodyType}`); }
    if (driveTrain) { params.push(`driveTrain = ${driveTrain}`); }
    if (engine) { params.push(`engine = ${engine}`); }
    if (fuelEconomy) { params.push(`fuelEconomy = ${fuelEconomy}`); }
    if (cargo) { params.push(`cargo = ${cargo}`); }
    if (depreciation) { params.push(`depreciation = ${depreciation}`); }
    if (maintenence) { params.push(`maintenence = ${maintenence}`); }

    // Query using the parameters if it exists 
    return pool.query(`SELECT * FROM car` + (params.length ? (" WHERE " + conditions.join(" OR ")) : "") + ";");
    
};


// EXPORT FUNCTIONS
module.exports = general_select;