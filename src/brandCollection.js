import react from "react";
import './style.css';
import Car from "./car";

function BrandCollection(props){

    const brandCars = [];
    // console.log("working");
    
    props.cars.forEach(car => {
        // Use Car ID as index??


        // Removes space in car name to use as an index
        let index = car.carName.replace(/\s/g, '');
        brandCars.push(<Car car={car} indexOfShowing={props.indexOfShowing} handleIndex={props.handleIndex} index={index} />)
    });


    return(
        <div className="table__cars">
            {brandCars}
        </div>
    )
}

export default BrandCollection;