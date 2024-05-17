import Image from "next/image";
import Link from "next/link";
import { FaHouse } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
import TimeLine from "./TimeLine";

const page = () => {
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
          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="/accounts/orders"
            >
              Orders
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            View Order #76768
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <div className="border rounded-lg p-4">
              {" "}
              <p className="text-[22px] text-textDeep font-bold">
                View Order #76768
              </p>
              <hr className="my-5" />
              <TimeLine />
            </div>
            {/* ................. */}
            <div className="">
              <div className="">
                <div className="mt-6 flex flex-col">
                  <div className="mb-4 flex justify-between border shadow-md border-gray-200 rounded-lg bg-[#F7F7F7] p-3">
                    <div className=" flex gap-4">
                      <Image
                        src="/vix.png"
                        className="w-[120px] h-full object-contain"
                        width={320}
                        height={320}
                        alt=""
                      />
                      <div className=" flex flex-col justify-between">
                        <div className="mb-3">
                          {" "}
                          <div className="text-textDeep font-bold text-base">
                            Vicks Inhaler
                          </div>
                          <div className="text-sm font-medium text-textMedium">
                            0.5ml-Inhaler
                          </div>
                          <div className="text-sm font-semibold text-textMedium">
                            1*1’s Pack
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-end">
                      <div className="mb-4">
                        {" "}
                        <div className="text-textMedium font-medium text-sm line-through ">
                          ৳1050
                        </div>
                        <div className="text-textDeep font-bold text-lg ">
                          ৳1050
                        </div>
                      </div>
                      <button className="bg-cart md:text-sm text-xs font-semibold rounded-lg text-white md:px-4 px-2 py-1.5">
                        Waiting for Delivery
                      </button>
                    </div>
                  </div>
                  {/* .. */}
                  <div className="mb-4 flex justify-between border shadow-md border-gray-200 rounded-lg bg-[#F7F7F7] p-3">
                    <div className=" flex gap-4">
                      <Image
                        src="/vix.png"
                        className="w-[120px] h-full object-contain"
                        width={320}
                        height={320}
                        alt=""
                      />
                      <div className=" flex flex-col justify-between">
                        <div className="mb-3">
                          {" "}
                          <div className="text-textDeep font-bold text-base">
                            Vicks Inhaler
                          </div>
                          <div className="text-sm font-medium text-textMedium">
                            0.5ml-Inhaler
                          </div>
                          <div className="text-sm font-semibold text-textMedium">
                            1*1’s Pack
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-end">
                      <div className="mb-4">
                        {" "}
                        <div className="text-textMedium font-medium text-sm line-through ">
                          ৳1050
                        </div>
                        <div className="text-textDeep font-bold text-lg ">
                          ৳1050
                        </div>
                      </div>
                      <button className="bg-cart md:text-sm text-xs font-semibold rounded-lg text-white md:px-4 px-2 py-1.5">
                        Waiting for Delivery
                      </button>
                    </div>
                  </div>
                  {/* .. */}
                  <div className="mb-4 flex justify-between border shadow-md border-gray-200 rounded-lg bg-[#F7F7F7] p-3">
                    <div className=" flex gap-4">
                      <Image
                        src="/vix.png"
                        className="w-[120px] h-full object-contain"
                        width={320}
                        height={320}
                        alt=""
                      />
                      <div className=" flex flex-col justify-between">
                        <div className="mb-3">
                          {" "}
                          <div className="text-textDeep font-bold text-base">
                            Vicks Inhaler
                          </div>
                          <div className="text-sm font-medium text-textMedium">
                            0.5ml-Inhaler
                          </div>
                          <div className="text-sm font-semibold text-textMedium">
                            1*1’s Pack
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-end">
                      <div className="mb-4">
                        {" "}
                        <div className="text-textMedium font-medium text-sm line-through ">
                          ৳1050
                        </div>
                        <div className="text-textDeep font-bold text-lg ">
                          ৳1050
                        </div>
                      </div>
                      <button className="bg-cart md:text-sm text-xs font-semibold rounded-lg text-white md:px-4 px-2 py-1.5">
                        Waiting for Delivery
                      </button>
                    </div>
                  </div>
                  {/* .. */}
                  {/* .. */}
                  <div className="bg-secondaryLight rounded-lg p-3 pb-5">
                    <div className="flex flex-col">
                      <p className="mb-2 text-lg font-medium text-textDeep">
                        Shipping Address
                      </p>
                      <hr className="" />
                      <div className="flex items-center gap-2 ms-10">
                        <FaHouse className="text-textDeep mb-4 text-xl" />
                        <div className="text-textDeep text-base font-normal my-2">
                          Muntasir Hasan <br /> +8801829337594, <br />
                          Gazi dipo lane, Lama, Bandarban, Chattogram
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FCFCFC] p-5 rounded-lg mt-3">
                    <div className="text-xl font-bold text-textDeep">
                      Invoice
                    </div>
                    <hr />

                    <div className="text-base text-textDeep">
                      <div className="mt-6 flex justify-between">
                        <div className="font-semibold">Order ID</div>
                        <div className="font-medium">৳1,125</div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="font-semibold">Order Time</div>
                        <div className="font-medium">৳1,125</div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="font-semibold">Subtotal (MRP)</div>
                        <div className="font-medium">৳1,125</div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="font-semibold">Discount applied</div>
                        <div className="font-medium">৳125</div>
                      </div>

                      <div className="mt-2 flex justify-between">
                        <div className="font-semibold">
                          Delivery Fee{" "}
                          <span className="text-textMedium ps-2 font-medium text-xs">
                            <span className="text-primeFade ">FREE</span> for
                            first order
                          </span>
                        </div>
                        <div className="font-medium">৳0</div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded-[8px] bg-primeFade px-3 py-3 text-sm font-semibold text-white lg:mb-20">
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
