"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ReferCarousel() {
  const carouselImages = [
    "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10187904/pexels-photo-10187904.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18827668/pexels-photo-18827668/free-photo-of-brown-cow-on-a-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // Add more image URLs as needed
  ];

  const carousel = carouselImages.map((image, index) => (
    <SwiperSlide key={index}>
      <div className=" mx-auto w-full  xl:h-[376px] h-64">
        <Image
          className="object-cover w-full h-full rounded-[20px]"
          src={image}
          alt={`Slide ${index + 1}`}
          width={1000}
          height={1000}
        />
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        autoplay={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="mySwiper z-50 relative"
      >
        {carousel}
      </Swiper>
    </>
  );
}
