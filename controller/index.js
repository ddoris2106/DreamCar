const { getNodeText } = require("@testing-library/dom");
const { general_select } = require("../db/query");


//CALL DATABSE FUNCTIONS

const select = async(req, res) => {
    console.log("GET request recieved on DEFAULT ROUTER.");

    if(req.query.length !== 0) {
        console.log("Query Parameters Recieved! Searching based on parameters.");
        try{
            const cars = await general_select(req.query);
            res.status().send(cars);
        }
        catch(err){
            next(err);
        }
    }
    else {
        console.log("No Query Parameters Detected! Searching genreally.");
        try{
            const cars = await general_select();
            res.status().send(cars);
        }
        catch(err){
            next(err);
        }
    }
}

module.exports = select;