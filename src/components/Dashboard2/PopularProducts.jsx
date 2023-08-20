"use client";

import React, { useState } from "react";
import babywipes from "../../assets/babywipes.png";
import diapers from "../../assets/diapers.png";
import pram from "../../assets/pram.png";
import lotion from "../../assets/lotion.png";
import babytowel from "../../assets/babytowel.png";
import gun from "../../assets/gun.png";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

function PopularProductsCarousel() {
  const slides = [
    {
      label: "Diaper",
      img: diapers,
    },
    {
      label: "Baby Wipe",
      img: babywipes,
    },
    {
      label: "Baby Lotion",
      img: lotion,
    },
    {
      label: "Pram",
      img: pram,
    },
    
    
    {
      label: "Baby Towel",
      img: babytowel,
    },
    {
      label: "Toy Gun",
      img: gun,
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
      className="bg-[#e7edfd] mx-2 rounded-lg text-center p-4 w-2/5 h-11/12"
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
