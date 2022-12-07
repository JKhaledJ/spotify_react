import React, { useEffect, useState } from "react";
import Slider from "../shared/slider/Slider";
import Carousel from "../shared/slider/Carousel";
import SliderElement from "../shared/slider/SliderElement";
import "../shared/slider/styles.css";

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
  
  
  const [sliderState, setSliderState] = useState({
    endSlide: 12,
    beginSlide: 0,
    displayingResources : [],
  });
  useEffect(() => {
    var displayingArray = [];
    for (let index = sliderState.beginSlide;index < sliderState.endSlide;index++) {
      displayingArray[index] = resources[index];
    }
    setSliderState({...sliderState, displayingResources : displayingArray})
    // console.log(resources)
    // console.log(sliderState)

  }, []);

  function nextSlide() {
    var item = {
      endSlide : 12,
      beginSlide: 0,
      displayingResources: []
    };
    if (sliderState.endSlide === resources.length - 1) {
      item.endSlide = 12;
      item.beginSlide = 0;
    } else {
      item.endSlide = sliderState.endSlide+1;
      item.beginSlide = sliderState.beginSlide+1;
    }
    for (let index = item.beginSlide;index < item.endSlide;index++) {
      item.displayingResources[index] = resources[index];
    }
    setSliderState(item);
  }

  function prevSlide() {
    var item = {
      endSlide : 12,
      beginSlide: 0,
      displayingResources: []
    };
    if (sliderState.beginSlide === 0) {
      item.endSlide = 12;
      item.beginSlide = 0;
    } else {
      item.endSlide = sliderState.endSlide-1;
      item.beginSlide = sliderState.beginSlide-1;
    }
    for (let index = item.beginSlide;index < item.endSlide;index++) {
      item.displayingResources[index] = resources[index];
    }
    setSliderState(item);
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-bold uppercase">{title}</h1>
        <div className="grow border-b-2 border-gray-200 mx-4"> </div>

        <button className="p-1" onClick={prevSlide}>
          <img src="../images/icons/left-arrow.png" width={10} />
        </button>
        <button className="p-1" onClick={nextSlide}>
          <img src="../images/icons/right-arrow.png" width={10} />
        </button>
      </div>
      <div className="mt-6 flex gap-2">
        <Slider resources={resources} />
      </div>
    </div>
  );
}
