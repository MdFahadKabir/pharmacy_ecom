"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
export default function BrandSwiper() {
  const carouselImages = [
    { image: "/brand/1 (1).png" },
    { image: "/brand/1 (2).png" },
    { image: "/brand/1 (3).png" },
    { image: "/brand/1 (4).png" },
    { image: "/brand/1 (5).png" },
    { image: "/brand/1 (6).png" },
    { image: "/brand/1 (7).png" },
  ];

  const carousel = carouselImages.map((images, index) => (
    <SwiperSlide key={index} className="lg:px-[65px] px-4 self-center ">
      <Image
        className="xl:w-[500px] md:w-[940px] w-52 object-contain md:mb-20 mb-10"
        src={images.image}
        alt="emedi"
        width={1000}
        height={1000}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <p className="md:text-3xl text-xl md:ps-[65px] md:text-start text-center mt-20 font-bold leading-[36.31px] text-slate-700 pb-7">
        Featured Brands
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={true}
        loop={true}
        breakpoints={{
          400: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1110: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1224: {
            slidesPerView: 5,
            spaceBetween: 10,
          },

          1326: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1560: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper flex justify-center mx-auto items-stretch -z-10 "
      >
        {carousel}
      </Swiper>
    </>
  );
}
