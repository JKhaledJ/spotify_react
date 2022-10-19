import React from "react";

export default function SliderElement({ src, title, key }) {
  return (
    <div className="w-18">
      <img key={key} src={src} className={`w-full h-18  rounded-md`}/>
      <div className="flex-col text-center text-xs">
        <p>{title}</p>
      </div>
    </div>
  );
}
