import React, { useContext, useRef } from "react";
import Slider from "../shared/slider/Slider";
import "../shared/slider/styles.css";
import { SliderContext } from "../../contexts/SliderContexts";

export default function Section({ title }) {
  var resources = [
    {
      title: "Find me on Twitter",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/1.jpg",
    },
    {
      title: "Welcome to Ark Labs",
      link: "https://ark-labs.co.uk",
      imageUrl: "images/sliderImages/2.jpg",
    },
    {
      title: "Some sort of third title",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Great to see you",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/1.jpg",
    },
    {
      title: "Hi baby",
      link: "https://ark-labs.co.uk",
      imageUrl: "images/sliderImages/2.jpg",
    },
    {
      title: "Some things",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Nice place",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/1.jpg",
    },
    {
      title: "Great job",
      link: "https://ark-labs.co.uk",
      imageUrl: "images/sliderImages/2.jpg",
    },
    {
      title: "Just a sample",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Nice place",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/1.jpg",
    },
    {
      title: "Great job",
      link: "https://ark-labs.co.uk",
      imageUrl: "images/sliderImages/2.jpg",
    },
    {
      title: "Just a sample",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Just a sample",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Just a sample",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
    {
      title: "Just a sample",
      link: "https://twitter.com/kendalmintcode",
      imageUrl: "images/sliderImages/3.jpg",
    },
  ];
  const cRef = useRef();
  const setting = {
    dragSpeed: 1,
    itemWidth: 100,
    itemHeight: 130,
    itemSideOffsets: 15,
  };

  const {sliderTranslateX, setSliderTranslateXContext} = useContext(SliderContext);
  function prevSlide() {
    const end = resources.length * (setting.itemWidth + 2 * setting.itemSideOffsets) - 30 - cRef.current.offsetWidth;
    if(sliderTranslateX < end) setSliderTranslateXContext(sliderTranslateX + end/5);
  }

  function nextSlide() {
    const end = resources.length * (setting.itemWidth + 2 * setting.itemSideOffsets) - 30 - cRef.current.offsetWidth;
    if(sliderTranslateX>0) setSliderTranslateXContext(sliderTranslateX - end/5);
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
        <Slider resources={resources} setting={setting} />
      </div>
    </div>
  );
}
