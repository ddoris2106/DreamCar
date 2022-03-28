import react, {useState} from "react";
import "./style.css";
import AppliedList from "./appliedList";
import FilterCategory from "./filterCategory";

function Filter(props) {
    // state containing applied filters

    const {cars} = props;
    const {appliedFilters, handleAppliedFilters} = props;
    // console.log(cars);

    let categories = Object.keys(cars[0]);
    let options = [];
    const filterCategories = [];

    // Show all possible options for a filter category
    categories.forEach(category => {

        if(category != "carName"){
            cars.forEach(car => {
                // If the option is not included, add it to the array
                if(!options.includes(car[category])){
                    options.push(car[category]);
                }
            });

            filterCategories.push(<FilterCategory handleAppliedFilters={handleAppliedFilters} category={category} options={options}/>);
        }
        
        options = [];
    });
    

    return(
        <div className="filter">
            <div className="filter__title">FILTER</div>
            <div className="filter__container">
                <AppliedList list={appliedFilters} handleAppliedFilters={handleAppliedFilters}/>
                <div className="filter__filterCategoriesContainer">
                    {filterCategories}
                </div>
            </div>
        </div>
    );
}

export default Filter;