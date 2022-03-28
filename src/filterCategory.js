import "./style.css";
import React, { useState } from "react";
import FilterOption from "./filterOption";

function FilterCategory({handleAppliedFilters, category, options}) {
    // expanded state for displaying category options 
    const [displayOptions, setDisplayOptions] = useState(false);

    const handleDisplayOptions = () => {
        setDisplayOptions(displayOptions => !displayOptions);
    }

    const categories = {
        brandName: "Brand Name",
        carName: "Car Name",
        releaseYear: "Release Year",
        cost: "Cost",
        bodyType: "Body Type",
        driveTrain: "Drive Train",
        engine: "Engine",
        fuelEconomy: "Fuel Economy",
        cargo: "Cargo",
        depreciation: "Depreciation",
        maintenence: "Maintenence"
    }

    const monetaryValues = ["Cost", "Depreciation", "Maintenence"];
    let monetary = false;

    let categoryName = categories[category];

    if(monetaryValues.includes(categoryName)){
        monetary = true;
    }

    return(
        <div className="filter__filterCategory">
            <div className={`filter__filterCategoryTitle ${displayOptions ? "showOptions" : ""}`} onClick={handleDisplayOptions}>{categoryName}</div>
            { displayOptions && <FilterOption categoryName={categoryName} handleAppliedFilters={handleAppliedFilters} options={options} monetary={monetary}/> }
        </div>
);
}

export default FilterCategory;