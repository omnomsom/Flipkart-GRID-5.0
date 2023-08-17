"use client";

import React, { useState } from "react";
import cover from "../../assets/cover.png";
import iphone from "../../assets/iphone.png";
import charger from "../../assets/charger.png";
import airpods from "../../assets/airpods.png";
import tv from "../../assets/tv.png";
import trimmer from "../../assets/trimmer.png";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function PopularProductsCarousel() {
  const slides = [
    {
      label: "Phone Case",
      img: cover,
    },
    {
      label: "iPhone 11",
      img: iphone,
    },
    {
      label: "Charger",
      img: charger,
    },
    {
      label: "TV",
      img: tv,
    },
    {
      label: "AirPods",
      img: airpods,
    },
    {
      label: "Trimmer",
      img: trimmer,
    },

    

  ];

  const [carouselPosition, setCarouselPosition] = useState(0);

  const handleRightClick = () => {
    if (carouselPosition < slides.length - 3) {
      setCarouselPosition(carouselPosition + 1);
    }
  };

  const handleLeftClick = () => {
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1);
    }
  };


  return (
    <div className="flex flex-row justify-center items-center h-4/5"  style={{ maxWidth: "95%"}}>
  <FiChevronLeft className="text-4xl"  onClick={handleLeftClick} /> {/* Increase icon size */}
  { slides.slice(carouselPosition, carouselPosition + 3).map((slide, index) => (
    <div
      key={index}
      className="bg-blue-50 mx-2 rounded-lg text-center p-4 w-2/5 h-11/12"
    >
      <img
        src={slide.img}
        alt={slide.label}
        className="mx-auto mb-2 rounded-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p className="text-sm">{slide.label}</p>
    </div>
  ))}
  <FiChevronRight  onClick={handleRightClick} className=" text-4xl" /> {/* Increase icon size */}
</div>


  );
}

export default PopularProductsCarousel;
