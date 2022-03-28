import './style.css';
import react, { useState } from 'react';
import Display from './display';
import Header from './header';
import Filter from './filter';
import CarTable from './carTable';

function DreamCarApp() {

  const [display, setDisplay] = useState(true);

  const handleDisplay = e => {
    e.preventDefault();

    setTimeout(()=>{
      setDisplay(false);
    }, 500);
  }

  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleAppliedFilters = (filterItem) => {
      // Check if it is already an applied filter
      if(appliedFilters.includes(filterItem)){
          // Take the index of the item
          let itemIndex = appliedFilters.indexOf(filterItem);

          // filter throught the applied filters where the index is not the same as the index of the item
          setAppliedFilters((prevAppliedFilters) => {
              return prevAppliedFilters.filter((item, index) => index !== itemIndex);
          })
      }
      else{
          setAppliedFilters(prevAppliedFilters => [...prevAppliedFilters, filterItem]);
      }
  }

  // filter through cars based on applied filters
  let CARS = [];

  // Go through each car
  if(appliedFilters.length != 0){
    ALLCARS.filter(car => {
      console.log(car);
      // Get the categories/keys
      let categories = Object.keys(car);
      
      categories.forEach(category => { 
        for(let i = 0; i < appliedFilters.length; i++){

          // See if the car's attribrute matches the filter
          if(car[category] == appliedFilters[i]){
            // console.log("MATCH FOUND");
            // console.log(car);
            CARS.push(car);
          }
        }
      });
    });
  } 
  else{
    CARS = ALLCARS;
  }

  // let disp = true;
  const app = [];
  
  if(display){
    return <Display handleDisplay={handleDisplay}/>;
  }
  else{
    app.push(<Header />);
    app.push(<Filter appliedFilters={appliedFilters} handleAppliedFilters={handleAppliedFilters} cars={ALLCARS} />);
    app.push(<CarTable cars={CARS} />);

    return (
      app
    );
  }
  
  
}

export default DreamCarApp;


const ALLCARS = [
  {brandName: "Nissan", carName: "Juke", releaseYear: 2017, cost: 19000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "28 MPG", cargo: "10.5 ft³", depreciation: 2000, maintenence: 1200},
  // https://carbuzz.com/compare/nissan-juke-s-vs-sl-vs-sv
  {brandName: "Toyota", carName: "C-HR", releaseYear: 2021, cost: 22000, bodyType: "SUV", driveTrain: "Front Wheel Drive", engine: "4 Cylinder", fuelEconomy: "29 MPG", cargo: "19.1 ft³", depreciation: 2000, maintenence: 1200},
  // https://carbuzz.com/cars/toyota/c-hr
  {brandName: "Hyundai", carName: "Kona", releaseYear: 2021, cost: 21000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "27 MPG", cargo: "19.2 ft³", depreciation: 2000, maintenence: 1200},
  // https://carbuzz.com/cars/hyundai/kona
  {brandName: "Jeep", carName: "Compass", releaseYear: 2021, cost: 24000, bodyType: "SUV", driveTrain: "Front Wheel Drive", engine: "V8", fuelEconomy: "26 MPG", cargo: "something", depreciation: 2000, maintenence: 1200},
  // 
  {brandName: "Lexus", carName: "RX Hybrid", releaseYear: 2021, cost: 48000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V6", fuelEconomy: "30 MPG", cargo: "something", depreciation: 2000, maintenence: 1200},
  //https://carbuzz.com/cars/lexus/rx-hybrid/2021
  {brandName: "BMW", carName: "X6", releaseYear: 2020, cost: 65000, bodyType: "SUV", driveTrain: "AWD", engine: "Turbo", fuelEconomy: "23 MPG", cargo: "something", depreciation: 2000, maintenence: 1200},
  // 
  {brandName: "Infiniti", carName: "Fx35", releaseYear: 2013, cost: 25000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V6", fuelEconomy: "18 MPG", cargo: "something", depreciation: 2000, maintenence: 1200},
  // https://carbuzz.com/cars/infiniti/fx/2013-infiniti-fx35-base
  {brandName: "BMW", carName: "M40i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  // 
  {brandName: "Toyota", carName: "Rav 4", releaseYear: 2021, cost: 26000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "V8", fuelEconomy: "30 MPG", cargo: "something", depreciation: 2000, maintenence: 1200}, 
  // https://carbuzz.com/cars/toyota/rav4/specs-and-trims
  {brandName: "Range Rover", carName: "Evoque", releaseYear: 2021, cost: 43000, bodyType: "SUV", driveTrain: "All Wheel Drive", engine: "Turbo", fuelEconomy: "24 MPG", cargo: "something", depreciation: 2000, maintenence: 1200},
  // https://carbuzz.com/cars/land-rover/range-rover-evoque/2021
  {brandName: "Nissan", carName: "Rogue", releaseYear: 2021, cost: 26000, bodyType: "SUV", driveTrain: "All Whell Drive", engine: "V8", fuelEconomy: "29 MPG", cargo: "something", depreciation: 2000, maintenence: 1200}, 
  // https://carbuzz.com/cars/nissan/rogue/2021-nissan-rogue-s
  {brandName: "Mitsubishi", carName: "Outlander Sport", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  // 
  {brandName: "Range Rover", carName: "Velar", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Mazda", carName: "CX5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Kia", carName: "K5 Gateway", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Kia", carName: "Forte", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Jaguar", carName: "F-Pace", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Jaguar", carName: "Fx", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Honda", carName: "HRV", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Lexus", carName: "Rx 350", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Kia", carName: "Sorento", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Honda", carName: "Tuscan", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "GMC", carName: "Terrain", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Volvo", carName: "XC 40", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Dodge", carName: "Dart Limited", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Dodge", carName: "Charger", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Chrysler", carName: "Envision", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Hyundai", carName: "Elantra", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Audi", carName: "Q5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Audi", carName: "A5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Audi", carName: "S5", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Infiniti", carName: "Q70", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "BMW", carName: "530i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Mercedes", carName: "CLA 250", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Mercedes", carName: "E300", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Alfa Romeo", carName: "Guila Q4", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Alfa Romeo", carName: "Stelvio Q4", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "Acura", carName: "ILX", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200},
  {brandName: "BMW", carName: "650i", releaseYear: 2020, cost: 25000, bodyType: "SUV", driveTrain: "AWD", engine: "V8", fuelEconomy: "something", cargo: "something", depreciation: 2000, maintenence: 1200}
];
