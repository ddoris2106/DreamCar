import react, {useState} from 'react';
import './style.css';
import Brand from './brand';
import BrandCollection from './brandCollection';


function CarTable(props){

    // Array to store all brands
    const brands = [];
    var brandCars = [];
    const table = [];

    // Go through the cars store every new brand
    props.cars.forEach(car => {
        if(!brands.includes(car.brandName)){
            brands.push(car.brandName);
        }
    });

    // Sort aphabetically
    brands.sort();
    

    const [index, setIndex] = useState("nothing");

    const handleIndex = newIndex => {
        // console.log(`New index is ${newIndex}`);
        setIndex(newIndex);
        // console.log(index)
    }

        // console.log(index);
        // Render all cars for a brand
        for(let i = 0; i < brands.length; i++){
            table.push(<Brand name={brands[i]}/>);

            props.cars.forEach(car => {
                if(car.brandName == brands[i]){
                    brandCars.push(car);
                }    
            });

            table.push(<BrandCollection cars={brandCars} indexOfShowing={index} handleIndex={handleIndex} />);
            // console.log(brandCars);
            brandCars = [];
            
        }


    return (
        // <div>{brands}</div>
        <div className="table">
            {table}
        </div>
    );
}

export default CarTable;