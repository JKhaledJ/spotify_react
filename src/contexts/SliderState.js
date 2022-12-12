import React, { useState } from "react";
import { SliderContext } from "./SliderContexts";
export default function SliderState(props) {
    const [sliderTranslateX, setSliderTranslateX] = useState(0);
    function setSliderTranslateXContext(val) {
        setSliderTranslateX(val);
    }
    return (
        <SliderContext.Provider
            value={{
                sliderTranslateX: sliderTranslateX,
                setSliderTranslateX: setSliderTranslateX,
                setSliderTranslateXContext: setSliderTranslateXContext,
            }}
        >
            {props.children}
        </SliderContext.Provider>
    );
}
