import './style.css';

function Feature(props){
    return(
        <div className="table__carDescFeature">
            <div className="table__carDescFeatureTitle"><span>{props.feature}</span></div>
            {props.value}
        </div>
    );
}

export default Feature;