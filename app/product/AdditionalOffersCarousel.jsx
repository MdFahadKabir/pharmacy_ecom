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

export default function AdditionalOffers() {
  const slideData = [
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    {
      imageUrl: "/ticket.png",
      title: "Cashback",
      amount: "৳100",
      description: "For purchasing above ৳4,000",
    },
    // Add more slide data objects as needed
  ];

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-textDeep my-5">
          {" "}
          Additional Offers{" "}
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <div className="swiper-button-prev hidden">Prev</div>
          <div className="swiper-button-next hidden">Next</div>
          <FaChevronLeft className="bg-lighter text-textMedium rounded-full size-[34px] p-2 swiper-button-prev" />
          <FaChevronRight className="bg-lighter text-textMedium rounded-full size-[34px] p-2 swiper-button-next" />
        </div>
      </div>
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1326: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1524: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className="py-3 px-2  bg-secondary rounded-2xl">
              <div className="flex items-center ">
                <Image
                  src={slide.imageUrl}
                  alt=""
                  height={200}
                  width={200}
                  className="w-[49px] h-[49px] object-contain"
                />
                <div>
                  <p className="text-primeFade text-lg font-bold">
                    {slide.title}
                  </p>
                  <p className="text-textDeep font-bold text-lg">
                    {slide.amount}
                  </p>
                  <p className="text-textDeep font-medium text-sm">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
