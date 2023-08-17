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
      label: "Super Pants",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/diaper/g/z/g/-original-imagjpye83jpfcr2.jpeg?q=70",
    },
    {
      label: "Baby Bed",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedding-set/y/y/1/new-born-baby-bedding-set-with-protective-mosquito-net-and-original-imaghy4ymnkpuucu.jpeg?q=70",
    },
    {
      label: "Baby Cream",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/m/n/g/-original-imaggujfykxhuqsu.jpeg?q=70",
    },
    {
      label: "Towel",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/baby-bed/s/s/t/-original-imagkcdzxghgvsb7.jpeg?q=70",
    },
    {
      label: "Gun toys",
      img: "https://rukminim2.flixcart.com/image/612/612/jwaztzk0/toy-weapon/u/r/u/hot-fire-soft-bullet-toy-gun-7036-bluekart-online-original-imafdpffqutx3jch.jpeg?q=70",
    },
    {
      label: "Cactus",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/learning-toy/5/f/y/electronic-recorder-repeating-dancing-cactus-toy-with-led-light-original-imaghyysc4gezatx.jpeg?q=70",
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
        style={{ maxWidth: "100%", height: "50px" }}
      />
      <p className="text-sm">{slide.label}</p>
    </div>
  ))}
  <FiChevronRight  onClick={handleRightClick} className=" text-4xl" /> {/* Increase icon size */}
</div>


  );
}

export default PopularProductsCarousel;
