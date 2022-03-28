import react from "react";
import './style.css';

function CarName(props){
    return(
        <div className="table__carDescName">{`${props.brand} ${props.name} (${props.year})`}</div>
    );
}

export default CarName;