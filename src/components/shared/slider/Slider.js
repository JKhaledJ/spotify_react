import React, { useEffect, useState } from "react";
import SliderElement from "./SliderElement";

export default function Slider({sliderState, resources}) {
 
  return (
    <div className="flex justify-start gap-3">
      {resources.map((slide, index) => {
        return <SliderElement src={slide.imageUrl} title={slide.title} key={index} />;
      })}
    </div>
  );
}
