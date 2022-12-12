import React, { useContext, useRef, useState } from "react";
import { SliderContext } from "../../../contexts/SliderContexts";
import "./styles.css";

export default function Carousel(props) {
  const [carouselState, setCarouselState] = useState({
    isDown: false,
    startX: null,
    transLeftOffset: null,
    dragSpeed: props.dragSpeed,
  });
  const {sliderTranslateX, setSliderTranslateXContext} = useContext(SliderContext);
  const cRef = useRef();

// mouse Down
function handleMouseDown(e) {
  const carousel = cRef.current;

  // this is due to the error that is been recived in console
  // this will make sure that 'e' is gonna passed to the callback function in setState
  // MORE INFO: https://reactjs.org/docs/events.html#event-pooling
  e.persist();

  carousel.classList.add("active");
  const _startX = e.pageX - carousel.offsetLeft;
  const _transLeftOffset = giveMeIntValOf(carousel.firstChild.style.transform);
  setCarouselState({
    isDown: true,
    startX: _startX,
    transLeftOffset: _transLeftOffset,
  });

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - _startX) * props.dragSpeed;

  carousel.firstChild.style.cssText = `
        transform: translateX(${_transLeftOffset + walk}px);
        transition: transform 0.0s ease-in-out;
      `;
}

// mouse Leave
function handleMouseLeave(e) {
  handleSnap();
}

// mouse Up
function handleMouseUp(e) {
  handleSnap();
}

// mouse Move
function handleMouseMove(e) {
  const { isDown, startX, transLeftOffset } = carouselState;
  const carousel = cRef.current;

  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * props.dragSpeed;
  setSliderTranslateXContext(transLeftOffset + walk);
}

// handle Snap To Sides
function handleSnap() {
  // const { isDown, startX, transLeftOffset } = this.state
  const { _data, itemWidth, itemSideOffsets } = props;
  const carousel = cRef.current;

  // Resetting
  setCarouselState({ isDown: false });
  carousel.classList.remove("active");

  // handeling Threshold
  // (1) getting transValue
  const tempThresholdOffset = giveMeIntValOf(`translateX(${sliderTranslateX}px)`);
  // (2) items width - 30(first & last item removed margins) - containerWidth(b/c of ending part)
  const end = _data.length * (itemWidth + 2 * itemSideOffsets) - 30 - carousel.offsetWidth;
  // (3) check if we passing from threshold ( handeling Snap To Sides )
  if (tempThresholdOffset < 0 || tempThresholdOffset > end) {
    setCarouselState({ isDown: false });
    carousel.firstChild.style.cssText = `
        transform: translateX(${tempThresholdOffset < 0 ? 0 : end}px);
        transition: transform 0.5s cubic-bezier(.25,.72,.51,.96);
      `;
    }
    if(sliderTranslateX < 0) setSliderTranslateXContext(0);
    if(sliderTranslateX > end) setSliderTranslateXContext(end);
}

// helper Function
const giveMeIntValOf = (el) => {
  // extracting 20 from translateX(20px) and converting it to integer with parsInt
  return parseInt(el.replace("translateX(", "").replace("px)", ""), 10);
};

  const { _data, itemWidth, itemHeight, itemSideOffsets } = props;
  const cWrapperStyle = {
    width: `${_data.length * (itemWidth + 2 * itemSideOffsets)}px`,
    height: `${itemHeight}px`,
  };

  return (
    <div
      className="carousel"
      ref={cRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        className="cWrapper"
        style={{
          ...cWrapperStyle,
          transform: `translateX(${sliderTranslateX}px)`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
