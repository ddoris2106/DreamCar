import './style.css';
import react, { useState } from 'react';
import Display from './display';
import Header from './header';
import Filter from './filter';
import CarTable from './carTable';
import ALLCARS from './allCars';

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

