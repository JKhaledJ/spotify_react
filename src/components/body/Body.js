import React from "react";
import Header from "./header/Header";
import Player from "./player/Player";
import Section from "./Section";
export default function Body() {
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
  return (
    <div className="flex flex-col w-5/6">
      <Header />
      <div className="max-h-screen overflow-y-scroll px-14 mt-7">
        <Section title="New Released" resources = {resources} />
        <Section title="Featured playlist"  resources = {resources} />
        <Section title="Browse" resources = {resources} />
      </div>
      <Player />
    </div>
  );
}
