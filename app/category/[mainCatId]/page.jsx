import TopBrands from "@/app/category/TopBrands";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import Footer from "@/components/shared/Footer";
import CategoryNav from "../CategoryNav";
import CategoryCarousel from "../CategoryCarousel";
import TopBrandCarousel from "../TopBrandCarousel";
const page = () => {
  return (
    <>
      <section className="lg:px-[65px] px-4 lg:mt-20 mt-4">
        <ol
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  lg:py-10 pt-28 pb-6 md:ps-0 ps-4"
          aria-label="Breadcrumb"
        >
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="#"
            >
              Home
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="#"
            >
              Category
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Sexual Wellness
          </li>
        </ol>

        <CategoryCarousel />

        {/*  */}

        <CategoryNav />

        <p className="lg:text-[22px] text-xl font-bold text-slate-700 pb-4 lg:ps-0 ps-4">
          Top Brands
        </p>
        <TopBrandCarousel />
      </section>
      <TopBrands />
      <Footer />
    </>
  );
};

export default page;
