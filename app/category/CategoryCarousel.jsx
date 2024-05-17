"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function CatgoryCarousel() {
  const carouselImages = [
    "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10187904/pexels-photo-10187904.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18827668/pexels-photo-18827668/free-photo-of-brown-cow-on-a-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    // Add more image URLs as needed
  ];

  const carousel = carouselImages.map((image, index) => (
    <SwiperSlide key={index}>
      <div className="xl:p-0 lg:p-0 md:p-0 px-4">
        <Image
          className="w-full lg:h-[287px] md:h-[245px] h-[145px] object-cover rounded-[20px]"
          src={image}
          alt={`Slide ${index + 1}`}
          width={1000}
          height={1000}
        />{" "}
      </div>
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#3C8DE6",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        autoplay={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination, Autoplay]}
        className="mySwiper z-50 relative"
      >
        {carousel}
      </Swiper>
    </>
  );
}
