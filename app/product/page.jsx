import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import Footer from "@/components/shared/Footer";
import { TbHexagonPlus } from "react-icons/tb";
import { IoShareSocialSharp } from "react-icons/io5";
import { GiDna2 } from "react-icons/gi";
import AdditionalOffers from "./AdditionalOffersCarousel";
import { CartModal } from "./CartModal";
const page = ({ params }) => {
  // const page = () => {
  return (
    <>
      <section section className="lg:px-[65px] px-4 lg:mt-20 mt-4">
        <ol
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  lg:py-10 pt-28 pb-6 md:ps-0 "
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
              Accounts
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Prescription
          </li>
        </ol>

        {/*  */}

        <div className="lg:flex gap-10">
          <div className=" ">
            <div className="relative flex flex-col justify-end overflow-hidden  border-gray-200 border rounded-[20px]">
              <Link href="#">
                <Image
                  className="w-full h-[459px] p-5 object-contain"
                  width={500}
                  height={500}
                  src="/pang.png"
                  alt=""
                />
              </Link>

              <div className="absolute w-[25%] py-2.5  bg-cart text-center font-bold text-[#4D3E1F] text-xs  rounded-se-xl ">
                Prescription Required
              </div>

              <div className="absolute bottom-6 right-7">
                <button
                  type="button"
                  className="bg-secondary  hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3.5 text-center inline-flex items-center"
                >
                  <FaRegHeart className="text-2xl text-[#414952]" />
                </button>
              </div>
            </div>

            <div className="bg-[#D9D9D9] my-10 h-[168px] text-[#46484B]  text-[45px] font-bold text-center rounded-2xl  pt-4">
              ADVERTISEMENT PLACEMENT
            </div>

            <div className="bg-[#FEF6F5] my-10 h-56  rounded-2xl drop-shadow-sm px-8 pt-10 pb-7">
              <div className="pb-3 flex items-center  text-[18px] font-medium text-[#E6463C] ">
                <PiWarningFill />
                <p>Disclaimer</p>
              </div>

              <p className="text-xs font-normal  ">
                The information provided herein is accurate, updated and
                complete as per the best practices of the Company. Please note
                that this information should not be treated as a replacement for
                physical medical consultation or advice. We do not guarantee the
                accuracy and the completeness of the information so provided.
                The absence of any information and/or warning to any drug shall
                not be considered and assumed as an implied assurance of the
                Company. We do not take any responsibility for the consequences
                arising out of the aforementioned information and strongly
                recommend you for a physical consultation in case of any queries
                or doubts.
              </p>
            </div>
          </div>

          {/*  */}
          <div className="border border-gray-200 rounded-[20px] lg:w-[40%] w-full px-10 py-12">
            <div className="flex justify-between items-center font-medium ">
              <TbHexagonPlus className=" text-2xl text-primary" />
              <p className="lg:text-xs">
                25,092 People have viewed this product
              </p>

              <IoShareSocialSharp className="text-2xl" />
            </div>

            <div className=" ms-5">
              <hr className="my-4" />
              <p className="text-[22px] font-semibold  text-textDeep">
                Napa EXTRA
              </p>

              <p className="text-[18px] font-medium mt-2 text-[#909193]">
                Tablet - 65mg
              </p>
              <hr className="my-4" />
              <div className="flex items-center gap-2">
                <div className="border rounded p-2">
                  <Image
                    src="/pang.png"
                    alt="emedi"
                    width={200}
                    height={200}
                    className="h-10 w-10"
                  />
                </div>

                <p className="text-primary text-sm font-normal">
                  Beximco Pharmaceuticals Ltd.
                </p>
              </div>
              <hr className="my-4" />

              <div className="flex items-center gap-2">
                <div className="">
                  <GiDna2 className="text-primary h-10 w-10" />
                </div>

                <p className="text-[#909193] text-sm font-medium">
                  Generic:{" "}
                  <span className="font-bold"> Paracetamol + Caffeine</span>{" "}
                </p>
              </div>
              <hr className="my-4" />
              <p className="text-[#909193] text-sm font-bold">
                {" "}
                12 Tablets ( 1 Strip){" "}
              </p>

              <div className="flex items-center gap-4">
                <p className="text-textDeep text-base line-through  font-bold">
                  {" "}
                  ৳27.00{" "}
                </p>
                <p className="text-[#9B9C9E] text-xs line-through  font-medium">
                  {" "}
                  ৳30.00{" "}
                </p>
                <p className="inline-flex items-center rounded-xl bg-[#FF9900] px-3 py-1 text-xs font-medium text-white">
                  10% OFF
                </p>
                <p className="inline-flex items-center rounded-xl bg-[#00D1FF] px-3 py-1 text-xs font-medium text-white">
                  10% Cashback
                </p>
              </div>

              {/* <button className="bg-primary text-white font-semibold rounded text-base px-4 py-2 mt-5">
                {" "}
                Add To Cart
              </button> */}

              <CartModal />

              <AdditionalOffers />

              <p className="py-6 text-xl font-semibold text-textDeep">
                Alternative Brands For <br />
                <span className="text-[#9B9C9E]  ">Napa EXTRA </span>
              </p>

              <div className="flex items-center justify-between">
                <Image
                  src="/pang.png"
                  alt="emedi"
                  width={200}
                  height={200}
                  className="h-11 w-11 object-contain"
                />

                <div>
                  <p className="text-textDeep text-base font-semibold">
                    Napa EXTRA
                  </p>
                  <p className="text-[#909193] text-sm font-normal">
                    Julphar Bangladesh Ltd.
                  </p>
                </div>

                <div>
                  <p className="text-[#7A7C7D] text-base font-medium">
                    ৳2.15/Tablet
                  </p>
                  <p className="text-primeFade text-base font-semibold">
                    Save 12%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br /> <br />
      <Footer />
    </>
  );
};

export default page;
