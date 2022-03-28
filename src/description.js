import react from "react";
import './style.css';
import Slider from './slider';
import CarName from './carName';
import Feature from './feature';

function Description(props){

    let features = [];
    let i = 0;

    Object.entries(props.car).forEach(entry => {
        const [key, value] = entry;
        // console.log(key, value);

        if(i >= 3){
            features.push(<Feature feature={key} value={value} />)
        }
        i++;
    });

    

    return(
        <div className="table__carDesc">
            <Slider />
            <CarName name={props.car.carName} brand={props.car.brandName} year={props.car.releaseYear} />
            {features}
        </div>
    )
}

export default Description;