"use client"

import Link from "next/link";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import CountdownTimer from "./CountdownTimer";

const FlashSale = () => {
  const Categories = [
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    {
      name: "16% OFF",
      image: "/pang.png",
      link: "#",
    },
    // Add more products as needed
  ];

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className=" lg:px-[65px] px-4 xl:pb-20 pb-10">
      <div className="md:flex xl:gap-32 lg:gap-10 md:gap-6  items-end justify-center rounded-[20px] md:py-16 py-10 bg-[#FFEDED] h-[376] relative">
        <div className="">
          <div className="text-center md:mb-10">
            <div className="flex items-center justify-center font-bold xl:text-4xl lg:text-xl md:text-xl text-3xl gap-2">
              <AiFillThunderbolt className="text-[#F05555]" />
              <p className=" text-[#4D4C4F] ">Flash Sale</p>
              <AiFillThunderbolt className="text-[#F05555]" />
            </div>
            <p className=" text-[#6F6A6C] xl:text-3xl lg:text-2xl md:text-base text-xl uppercase py-3 font-bold">
              Only 24 Hours
            </p>
            <p className="text-[#4D4C4F] xl:text-lg lg:text-base md:text-sm  font-bold">
              Up To 20% Off On All Products
            </p>
          </div>



          <button className="border border-textDeep text-textDeep rounded p-2 text-sm flex justify-center md:hidden  mx-auto my-7">
            3 HOURS, 58 MINUTES, 23 SECONDS Left{" "}
          </button>

          <div className="">
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            {/* <div className="border border-[#5E615C] lg:rounded-2xl rounded-xl text-center text-[#666666]  xl:py-4 lg:py-2 md:py-2.5  lg:w-20 md:w-16">
              <p className="font-bold xl:text-[28px] lg:text-lg md:text-base  poppins ">
                23
              </p>
              <p className=" lg:text-sm md:text-xs font-medium ">hours</p>
            </div>
            <div className="border border-[#5E615C] lg:rounded-2xl rounded-xl text-center text-[#666666]  xl:py-4 lg:py-2 md:py-2.5  lg:w-20 md:w-16">
              <p className="font-bold xl:text-[28px] lg:text-lg md:text-base  poppins ">
                23
              </p>
              <p className=" lg:text-sm md:text-xs font-medium ">Minutes</p>
            </div>
            <div className="border border-[#5E615C] lg:rounded-2xl rounded-xl text-center text-[#666666]  xl:py-4 lg:py-2 md:py-2.5  lg:w-20 md:w-16">
              <p className="font-bold xl:text-[28px] lg:text-lg md:text-base  poppins ">
                23
              </p>
              <p className=" lg:text-sm md:text-xs font-medium ">Seconds</p>
            </div> */}
          </div>
        </div>
        {/* ... */}
        <div className="md:block flex justify-center">
          <div className="grid grid-cols-4 lg:gap-5 md:gap-3 gap-1.5">
            {Categories.map((category, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-end overflow-hidden lg:size-[88px] md:size-[80px] size-[86px] rounded-xl"
              >
                <Link href="#">
                  <Image
                    className="w-full h-full"
                    width={500}
                    height={500}
                    src={category.image}
                    alt=""
                  />
                </Link>

                <div className="absolute w-[65%] py-1.5  bg-cart text-center font-bold text-[#4D3E1F] lg:text-xs text-[10px] leading-[14.2px] rounded-se-xl ">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-2 right-10 z-10">
          <button className="border border-textDeep text-textDeep rounded p-2 text-sm flex justify-center hidden md:block  mx-auto my-7">See All</button>
        </div>

      </div>
    </div>
  );
};

export default FlashSale;
