import React from "react";

export default function SliderElement({ src, title, style }) {
  return (
    <div className="item flex-col" style={{...style}}>
      <img src={src} className={`rounded-md h-24`} alt="movie"/>
      <div className="flex-col text-center text-xs">
        <p>{title}</p>
      </div>
    </div>
  );
}
