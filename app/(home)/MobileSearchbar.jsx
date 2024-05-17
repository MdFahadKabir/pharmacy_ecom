import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";

const MobileSearchbar = () => {
  return (
    <div>
      <div className="lg:hidden md:hidden block mt-[88px] py-3 px-4">
        <div className="relative flex h-10  items-center overflow-hidden rounded-lg bg-lighter px-4 focus-within:shadow-lg">
          <div className="pe-5">
            <div className="flex items-center">
              <p className="text-sm">All</p>
              <MdOutlineArrowDropDown className=" text-gray-500   pointer-events-none" />
            </div>
          </div>
          <input
            className="peer h-full w-full pr-2 text-xs text-gray-700 outline-none bg-lighter"
            type="text"
            id="search"
            placeholder="Search by Medicine, Device or Products"
          />
          <div className="grid h-full w-12 place-items-center text-gray-300">
            <IoSearchOutline className="text-primeFade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearchbar;
