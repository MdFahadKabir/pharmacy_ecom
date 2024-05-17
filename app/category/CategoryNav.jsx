import React from "react";
import Link from "next/link";
const CategoryNav = () => {
  return (
    <section className="my-10 lg:p-0 px-4">
      <div className="lg:flex gap-10 lg:text-base text-sm font-medium  text-[#9E9E9E] cursor-pointer hidden ">
        <Link className="hover:text-[#3C8DE6]" href="#">
          All
        </Link>
        <Link className="hover:text-[#3C8DE6]" href="#">
          Men’s Sexual Wellness
        </Link>
        <Link className="hover:text-[#3C8DE6]" href="#">
          Women’s Sexual Wellness
        </Link>
        <Link className="hover:text-[#3C8DE6]" href="#">
          {" "}
          Universal Sexual Awareness
        </Link>
      </div>

      {/* mbl */}
      <div className="overflow-x-scroll  overflow-y-hidden lg:text-base text-sm font-medium  text-[#9E9E9E] cursor-pointer  lg:hidden block ">
        <div id="objects" class="w-auto whitespace-nowrap flex gap-10">
          <Link class="inline-block hover:text-[#3C8DE6]" href="#">
            All
          </Link>
          <Link class="inline-block hover:text-[#3C8DE6]" href="#">
            Men’s Sexual Wellness
          </Link>
          <Link class="inline-block hover:text-[#3C8DE6]" href="#">
            Women’s Sexual Wellness
          </Link>
          <Link class="inline-block hover:text-[#3C8DE6]" href="#">
            Universal Sexual Awareness
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
