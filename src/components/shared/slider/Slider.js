import React from "react";
import SliderElement from "./SliderElement";
import Carousel from "./Carousel";
export default function Slider({ resources, setting }) {
  const itemStyle = {
    width: `${setting.itemWidth}px`,
    height: `${setting.itemHeight}px`,
    margin: `0px ${setting.itemSideOffsets}px`,
  };
  return (
    <Carousel _data={resources} {...setting}>
      {resources.map((value, index) => (
        <SliderElement
          src={value.imageUrl}
          title={value.title}
          key={index}
          style={itemStyle}
        />
      ))}
    </Carousel>
  );
}
