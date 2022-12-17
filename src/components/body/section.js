import React, { createContext, useRef, useState } from "react";
import Slider from "../shared/slider/Slider";
import "../shared/slider/styles.css";

export const SliderContext = createContext();
export default function Section({ title, resources }) {
  const [sliderTranslateX, setSliderTranslateX] = useState(0);
  const cRef = useRef();
  const setting = {
    dragSpeed: 1,
    itemWidth: 100,
    itemHeight: 130,
    itemSideOffsets: 15,
  };

  function prevSlide() {
    const end = resources.length * (setting.itemWidth + 2 * setting.itemSideOffsets) - 30 - cRef.current.offsetWidth;
    const slideSize = end / 5;
    var tempSlideSize = sliderTranslateX + slideSize;
    if(tempSlideSize >= end)
    setSliderTranslateX(end);
    else
    setSliderTranslateX(tempSlideSize);
  }

  function nextSlide() {
    const end = resources.length * (setting.itemWidth + 2 * setting.itemSideOffsets) - 30 - cRef.current.offsetWidth;
    const slideSize = end / 5;
    var tempSlideSize = sliderTranslateX - slideSize;
    if (tempSlideSize < 0) {
      setSliderTranslateX(0);
    }
    else{
      setSliderTranslateX(tempSlideSize);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-bold uppercase">{title}</h1>
        <div className="grow border-b-2 border-gray-200 mx-4"> </div>

        <button className="p-1" onClick={prevSlide}>
          <img
            src="../images/icons/left-arrow.png"
            width={10}
            alt="left arrow"
          />
        </button>
        <button className="p-1" onClick={nextSlide}>
          <img
            src="../images/icons/right-arrow.png"
            width={10}
            alt="right arrow"
          />
        </button>
      </div>
      <div className="mt-6 flex gap-2" ref={cRef}>
      <SliderContext.Provider
          value={{
              sliderTranslateX: sliderTranslateX,
              setSliderTranslateX: setSliderTranslateX,
          }}
        >
          <Slider resources={resources} setting={setting} />
        </SliderContext.Provider>
      </div>
    </div>
  );
}
