import React from "react";
import Image from "next/image";
import ReferCarousel from "./ReferCarousel";
const Refer = () => {
  return (
    <div className="lg:px-[65px] px-4 md:pb-20 pb-10">
      <div className="flex md:flex-row flex-col xl:gap-20 lg:gap-10 md:gap-7 gap-5">
        <div className="bg-violet-200 p-10 xl:py-20 md:py-10 rounded-[20px] xl:h-[376px] md:h-64  lg:w-1/2 relative">
          <div className="xl:text-lg md:text-sm">
            <p className="font-bold xl:text-[45px] md:text-3xl text-xl">
              Refer and Earn
            </p>
            <p className="py-5">
              Share <span className="font-semibold">Emedi</span> with your
              friends and Family, keep earning{" "}
              <span className="font-semibold">40 Taka </span> each successful
              refer.
            </p>
            <button className="bg-[#3C8DE6] text-white xl:text-lg text-sm  xl:p-4 md:p-3 p-2  px-5 rounded-[8px]">
              Refer A Friend Now
            </button>
            <div className="absolute right-10 bottom-20 opacity-80">
            <Image
                height={150}
                width={150}
                className="skew-x-6 -rotate-[25deg]"
                src="/loop.png"
                alt="Random image"
              />
            </div>
          </div>
        </div>

        <div className=" mx-auto md:w-1/2 w-full  xl:h-[376px] md:h-64 ">
          <ReferCarousel />
          {/* <Image
            height={300}
            width={300}
            className=" w-full h-full object-cover rounded-[20px]"
            src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
            alt="Random image"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Refer;
