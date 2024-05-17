"use client";
import { useState } from "react";
import { BsTags } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
export const CartModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-primary text-white font-semibold rounded text-base px-4 py-2 mt-5"
      >
        Add to Cart
      </button>
      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute bg-white drop-shadow-2xl  overflow-y-scroll h-[600px] ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          } `}
        >
          <div className="max-w-md">
            <div className="container mx-auto px-4 py-8">
              <div className="flex  items-center justify-between border-b border-gray-200 pb-4">
                <h1 className="text-xl font-bold">Shopping Cart</h1>
                <button onClick={() => setOpenModal(false)}>
                  <Image src="/cross.png" width={32} height={32} alt="" />
                </button>
              </div>
              <div className="mt-6 flex flex-col">
                <div className=" flex justify-between border border-gray-200 rounded-lg bg-[#F7F7F7] p-3">
                  <div className="w-2/4">
                    <Image
                      src="/vix.png"
                      className="w-[120px] h-full object-contain"
                      width={320}
                      height={320}
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 flex flex-col justify-between">
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

                    <div className="">
                      <select className="block w-[100px] h-[31px] border border-blue-500 text-gray-900 text-sm rounded-lg ring-blue-500 focus:ring-blue-500 focus:border-blue-500  ">
                        <option
                          selected
                          className="text-primeFade text-base font-semibold"
                        >
                          Qty :1{" "}
                        </option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 justify-between items-end">
                    <Image
                      src="/trash.png"
                      className="size-[24px] object-contain"
                      width={320}
                      height={320}
                      alt=""
                    />
                    <div>
                      {" "}
                      <div className="text-textMedium font-medium text-sm line-through ">
                        ৳1050
                      </div>
                      <div className="text-textDeep font-bold text-lg ">
                        ৳1050
                      </div>
                    </div>
                  </div>
                </div>
                {/* .. */}
                <div className=" flex justify-between border border-gray-200 rounded-lg bg-[#F7F7F7] p-3 my-3">
                  <div className="w-2/4">
                    <Image
                      src="/vix.png"
                      className="w-[120px] h-full object-contain"
                      width={320}
                      height={320}
                      alt=""
                    />
                  </div>
                  <div className="w-2/4 flex flex-col justify-between">
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

                    <div className="">
                      <select className="block w-[100px] h-[31px] border border-blue-500 text-gray-900 text-sm rounded-lg ring-blue-500 focus:ring-blue-500 focus:border-blue-500  ">
                        <option
                          selected
                          className="text-primeFade text-base font-semibold"
                        >
                          Qty :1{" "}
                        </option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4 justify-between items-end">
                    <Image
                      src="/trash.png"
                      className="size-[24px] object-contain"
                      width={320}
                      height={320}
                      alt=""
                    />
                    <div>
                      {" "}
                      <div className="text-textMedium font-medium text-sm line-through ">
                        ৳1050
                      </div>
                      <div className="text-textDeep font-bold text-lg ">
                        ৳1050
                      </div>
                    </div>
                  </div>
                </div>
                {/* .. */}
                <div className="bg-secondaryLight rounded-lg p-3 pb-5">
                  <div className="flex flex-col">
                    <p className="mb-2 text-lg font-medium text-textDeep">
                      Shipping Address
                    </p>
                    <hr className="" />
                    <div className="text-textDeep text-sm font-medium text-center my-2">
                      You haven't added any address yet.
                    </div>
                    <button className="mt-2 flex mx-auto bg-blue-600 rounded-[4px] py-2 px-4  text-sm font-semibold text-white">
                      Add New Address
                    </button>
                  </div>
                </div>

                {/* <div className="bg-red-50 rounded-lg my-4 p-3">
            <div className="flex flex-col">
              <h2 className="mb-2 text-sm font-normal underline text-textDeep">
                Have any coupon code?
              </h2>
              <div class="mb-2 flex items-center">
                <input
                  type="text"
                  class="mr-0 rounded-l-md text-xs border-none px-3 py-2 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter Coupon Code"
                />
                <button class="rounded-r-md border  bg-cart px-3 py-2 text-white">
                  Apply
                </button>
              </div>

              <div className="text-green-500">
                You are saving ৳125 in this order
              </div>
            </div>
          </div> */}

                <div className="bg-red-50 rounded-lg my-4 p-3">
                  <div className="flex flex-col">
                    <h2 className="mb-2 text-sm font-normal underline text-textDeep">
                      Have any coupon code?
                    </h2>
                    <div className="mb-2 flex items-center relative">
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                        <Image
                          src="/ticket.png"
                          className="size-[23px] object-contain"
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>
                      <input
                        type="text"
                        className="pl-8 w-full rounded-l-md text-xs border-none px-3 py-3 focus:border-blue-500 focus:outline-none"
                        placeholder="Enter Coupon Code"
                      />
                      <button className="rounded-r-md bg-cart px-3 py-2 text-white">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FEE796] text-sm font-bold text-textDeep flex items-center gap-1 mx-auto p-3 px-5 rounded-lg border border-dashed border-spacing-0.5 border-[##CB9F07]">
                  <p>
                    <BsTags />
                  </p>{" "}
                  <p> You are saving ৳125 in this order</p>
                </div>
                <div className="text-sm text-textDeep">
                  <div className="mt-6 flex justify-between">
                    <div className="font-semibold">Subtotal (MRP)</div>
                    <div className="font-medium">৳1,125</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="font-semibold">Discount applied</div>
                    <div className="font-medium">৳125</div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="font-medium">
                      Delivery Fee{" "}
                      <span className="text-textMedium ps-2">
                        <span className="text-primeFade">FREE</span> for first
                        order
                      </span>
                    </div>
                    <div className="font-medium">৳0</div>
                  </div>
                </div>
                <div className="font-semibold mt-2 flex justify-between border-b border-t text-primeFade text-base border-gray-200 pb-2 pt-2">
                  <div>Total Payable Amount</div>
                  <div>৳61,100</div>
                </div>
                <button className="mt-4 w-full rounded-[4px] bg-primeFade px-3 py-3 text-sm font-semibold text-white">
                  Checkout Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
