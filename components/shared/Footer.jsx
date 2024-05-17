import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <section className="bg-[#3C8DE6] pt-[50px] text-white xl:block hidden">
        <footer className="divide-y  h-[449px]  px-[65px]">
          <div className="lg:flex gap-28 justify-between py-10 mx-auto space-y-8 lg:space-y-0">
            <div className="lg:w-1/3">
              <div className="">
                <Image
                  className="w-[142px] h-[89px] object-contain mb-8"
                  alt="Emedi"
                  src="/logo.png"
                  height={300}
                  width={300}
                />
                <p className="text-3xl font-bold leading-[#36.31px] mb-4">
                  Lorem ipsum dolor sit amet consectetur.{" "}
                </p>
                <p className="text-base leading-[19.36px] font-normal text-[#CEE2F9]">
                  Lorem ipsum dolor sit amet consectetur. Phasellus vulputate
                  orci mi malesuada lectus aliquam dolor at sed.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 lg:grid-cols-3">
              <div className="space-y-8">
                <p className="leading-[24.2px] font-semibold text-xl">Menu</p>
                <ul className="space-y-4 uppercase text-[#CEE2F9]">
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Flash sales
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Categories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Upload Prescription
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-8">
                <p className="leading-[24.2px] font-semibold text-xl">
                  Useful links
                </p>
                <ul className="space-y-4 uppercase text-[#CEE2F9]">
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Career
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Campaigns
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      Return Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-8">
                <p className="leading-[24.2px] font-semibold text-xl">
                  Contact Us
                </p>
                <ul className="space-y-4 ">
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      emedi.pharma@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-normal leading-[19.36px]"
                      rel="noopener noreferrer"
                      href="#"
                    >
                      +88 0192 234 23
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6 leading-[12.1px] text-[10px] font-normal text-end ">
            Copyright | Emedi Pharma. All Rights Reserved. 2024
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
