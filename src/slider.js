import react, {useState} from "react";
import './style.css';

function Slider(){

    const [sliderIndex, setSliderIndex] = useState(1);
    const [isFirst, setIsFirst] = useState(true);
    const [isSecond, setIsSecond] = useState(false);
    const [isThird, setIsThird] = useState(false);
    const [isFourth, setIsFourth] = useState(false);
    const [isFifth, setIsFifth] = useState(false);

    const addToIndex = () => {
        setSlider(sliderIndex + 1);
    }
    
    const subtractFromIndex = () => {
        setSlider(sliderIndex - 1);
    }

    const changeState = index => {
        if (index == 1) {
            setIsFirst(true);
            setIsSecond(false);
            setIsThird(false);
            setIsFourth(false);
            setIsFifth(false);
        } 
        else if(index == 2){
            setIsFirst(false);
            setIsSecond(true);
            setIsThird(false);
            setIsFourth(false);
            setIsFifth(false);
        }
        else if (index == 3) {
            setIsFirst(false);
            setIsSecond(false);
            setIsThird(true);
            setIsFourth(false);
            setIsFifth(false);
        }
        else if (index == 4) {
            setIsFirst(false);
            setIsSecond(false);
            setIsThird(false);
            setIsFourth(true);
            setIsFifth(false);
        }
        else if (index == 5) {
            setIsFirst(false);
            setIsSecond(false);
            setIsThird(false);
            setIsFourth(false);
            setIsFifth(true);
        }
    }

    // Change the position of the slider
    const setSlider = position => {

        switch (position) {
            case 1:
                changeState(1);
                break;
            case 2:
                changeState(2);
                break;
            case 3:
                changeState(3);
                break;
            case 4:
                changeState(4);
                break;
            case 5:
                changeState(5);
                break;
            default:
                changeState(1);
                break;
        }

        setSliderIndex(position);
        // Change image ref/index

    }

    console.log(sliderIndex);



    return(
        <div className="table__carDescSlider">
            <div className={`table__carDescSliderButton leftButton ${!isFirst ? "show" : "hide"}`} onClick={addToIndex} ></div>
            <input type="radio" id="first" value="first" name="slider pics" onClick={() => setSlider(1)} />
            <input type="radio" id="second" value="second" name="slider pics" onClick={() => setSlider(2)} />
            <input type="radio" id="third" value="third" name="slider pics" onClick={() => setSlider(3)} />
            <input type="radio" id="fourth" value="fourth" name="slider pics" onClick={() => setSlider(4)} /> 
            <input type="radio" id="fifth" value="fifth" name="slider pics" onClick={() => setSlider(5)} />
            <div className={`table__carDescSliderButton rightButton ${!isFifth ? "show" : "hide"}`} onClick={subtractFromIndex} ></div>
            <div className={`table__carDescSlider slider ${isFirst ? "first" : ""}${isSecond ? "second" : ""}${isThird ? "third" : ""}${isFourth ? "fourth" : ""}${isFifth ? "fifth" : ""}`}></div>
        </div>
    );
}

export default Slider;