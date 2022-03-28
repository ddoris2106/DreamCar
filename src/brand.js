import react from "react";
import './style.css';

function Brand(props){

    return(
        <div className="table__brand">
            <div className="table__brandLogo">
                <img src="" alt={props.name} />
            </div>
        </div>
    );
}

export default Brand;