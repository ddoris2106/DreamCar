import react, {useState, useEffect} from "react";
import './style.css';
import Description from './description';

// const State = {
//     expanded: true
// }

function Car(props){
    const {indexOfShowing, handleIndex} = props;
    const {index} = props;

    console.log(`INDEX OF CAR ISSSSSS ${index}`);

    // expanded state for description toggle
    const [expansion, setExpansion] = useState(false);

    useEffect(() => {
        // close expansion
        if(indexOfShowing !== index){
            // console.log(index + " is not " + indexOfShowing);
            setExpansion(false);
        } 
        // console.log("ran");
    }, [indexOfShowing, index]);

    const handleExpansion = (type) => {
        // console.log(e);

        // SCROLL TO NOT WORKING PROPERLY
        // let y = e.target.parentNode.pageY;
        // console.log(y);

        if(type === "open"){
            // window.scrollTo(0, y);
            setExpansion(true);
            // indexOfShowing = index;
            // re-draw
            handleIndex(index);
            // reRender();
        }
        else if(type === "close"){
            // NOT CLOSINGGGG!!!!!!
            console.log("Closing");
            handleIndex("nothing");
            setExpansion(false);
            console.log(expansion);
        }

        // console.log(index);
        
    }

    return(
        <div className={expansion ? "table__car expanded" : "table__car"} onClick={(e) => handleExpansion("open")}>
            <div className="table__carPic">
                <img src="" alt={props.car.carName} />
                {expansion && <div className="table__carPicClose" onClick={(e) => handleExpansion("close")}></div>}
            </div>
            { expansion && <Description car={props.car}/>}
        </div>
    )
}

export default Car;

// import React from "react";

// class Child extends React.Component {
//   render() {
//     

//     return (
//       <div>
//         <button onClick={updateModel}>
//           {this.props.state[this.props.title] ? "Click" : "Don't Click"}
//         </button>
//         {/* <p>{this.props["title"]}</p> */}
//       </div>
//     );
//   }
// }

// export default Child;