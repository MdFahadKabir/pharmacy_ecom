import React from "react";

const TimeLine = () => {
  return (
    <div>
      <>
        {/* Item */}
        <div className="flex gap-x-3">
          {/* Left Content */}
          <div className="w-28 text-end">
            <span className="text-sm font-semibold text-textMedium">
              February 14
            </span>
            <span className="text-sm font-semibold text-textMedium">
              12:05PM
            </span>
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-blue-700 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                  fill="#3C8DE6"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="mt-1 flex gap-x-3">
          {/* Left Content */}
          <div className="w-28 text-end">
            <span className="text-sm font-semibold text-textMedium">
              February 14
            </span>
            <span className="text-sm font-semibold text-textMedium">
              12:05PM
            </span>
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-blue-700 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                  fill="#3C8DE6"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3 mt-1">
          {/* Left Content */}
          <div className="w-28 text-end">
            {/* <span class="text-sm font-semibold text-textMedium">February 14</span>
<span class="text-sm font-semibold text-textMedium">12:05PM</span> */}
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#212427"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3 mt-1">
          {/* Left Content */}
          <div className="w-28 text-end">
            {/* <span class="text-sm font-semibold text-textMedium">February 14</span>
<span class="text-sm font-semibold text-textMedium">12:05PM</span> */}
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#212427"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3 mt-1">
          {/* Left Content */}
          <div className="w-28 text-end">
            {/* <span class="text-sm font-semibold text-textMedium">February 14</span>
<span class="text-sm font-semibold text-textMedium">12:05PM</span> */}
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#212427"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3 mt-1">
          {/* Left Content */}
          <div className="w-28 text-end">
            {/* <span class="text-sm font-semibold text-textMedium">February 14</span>
<span class="text-sm font-semibold text-textMedium">12:05PM</span> */}
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative after:absolute after:bottom-0 after:start-3.5 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-gray-400 last:after:hidden">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#212427"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
        {/* Item */}
        <div className="flex gap-x-3 mt-1">
          {/* Left Content */}
          <div className="w-28 text-end">
            {/* <span class="text-sm font-semibold text-textMedium">February 14</span>
<span class="text-sm font-semibold text-textMedium">12:05PM</span> */}
          </div>
          {/* End Left Content */}
          {/* Icon */}
          <div className="relative ">
            <div className="relative z-10 flex size-7 items-center justify-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#212427"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          {/* End Icon */}
          {/* Right Content */}
          <div className="grow pb-8 pt-0.5">
            <p className="flex gap-x-1.5 text-sm font-semibold text-gray-800">
              Order Placed
            </p>
            <p className="mt-1 text-xs font-medium text-textMedium">
              Your order is successfully placed
            </p>
          </div>
          {/* End Right Content */}
        </div>
        {/* End Item */}
      </>
    </div>
  );
};

export default TimeLine;
