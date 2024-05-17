"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { IoBagAdd } from "react-icons/io5";

export default function HeroBottomCarousel() {
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
            slidesPerView: 2.5,
            spaceBetween: 5,
          },

          500: {
            slidesPerView: 3.5,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="mt-10 px-4 ">
            <div className="relative h-36 w-full inline-flex items-center p-3 text-sm font-medium  text-white bg-[#B594E0] rounded-2xl xl:hidden lg:hidden ">
              <div className="mt-3 flex justify-center mx-auto">
                <div>
                  <p className="text-textDeepSemi text-sm font-bold ">UPTO </p>
                  <p className="text-textDeep font-bold text-sm ">10% OFF</p>
                  <p className="mb-4 text-textDeep font-medium text-sm ">
                    {" "}
                    + CashBack
                  </p>
                  <button className=" rounded-[8px] font-bold text-sm bg-white text-textDeep shadow-xl px-2 py-1.5 ">
                    Order Now!{" "}
                  </button>
                </div>
              </div>

              <div className="absolute inline-flex items-center justify-center size-16 text-xs font-bold text-white bg-[#EBE1F6] rounded-full -top-5 -end-5 drop-shadow-xl">
                <IoBagAdd className="text-xl  text-[#9F55F0]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
