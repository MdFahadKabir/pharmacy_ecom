"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TopBrandCarousel() {
  const slideData = [
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    {
      imageUrl: "/gsk.png",
      title: "Glaxosmithkline",
    },
    // Add more slide data objects as needed
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={true}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper "
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="md:border rounded-lg border-primeFade py-2 "
          >
            <div className="flex flex-col items-center">
              <Image
                src={slide.imageUrl}
                alt=""
                height={200}
                width={200}
                className="w-[100px] h-[87px] object-contain"
              />
              <p className="text-sm font-medium mt-2 text-textDeepSemi">
                {" "}
                {slide.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
