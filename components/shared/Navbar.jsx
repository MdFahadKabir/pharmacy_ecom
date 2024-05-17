import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {
  return (
    <section className="bg-primary fixed top-0 w-full z-50 xl:px-16 px-4 ">
      <div className=" mx-auto">
        <div className=" flex justify-between items-center py-[19px] ">
          <Link href="/" className="">
            <Image
              width={200}
              height={200}
              alt="Emedi Logo"
              src="/logo.png"
              className="md:w-[67px] w-14 object-contain"
            />
          </Link>

          <div className="xl:max-w-md lg:max-w-sm xl:block lg:block md:block hidden">
            <div className="relative flex h-[44px] xl:w-[620px] lg:w-[500px] md:w-[550px] items-center overflow-hidden rounded-[4px] bg-white border border-white px-4 focus-within:shadow-lg">
              <div className="pe-5">
                <div className="flex items-center">
                  <p className="xl:">All</p>
                  <MdOutlineArrowDropDown className=" text-gray-500   pointer-events-none" />
                </div>
              </div>
              <input
                className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
                type="text"
                id="search"
                placeholder="Search by Medicine, Device or Products"
              />
              <div className="grid h-full w-12 place-items-center text-gray-300">
                <IoSearchOutline className="text-primeFade" />
              </div>
            </div>
          </div>

          <div className="flex lg:gap-10 md:gap-7 gap-5 items-center">
            <button
              type="button"
              className="relative m-1 ms-0 flex md:size-[50px] size-[40px] items-center justify-center rounded-full bg-cart text-sm font-semibold text-gray-800 disabled:pointer-events-none"
            >
              <MdOutlineShoppingCart className="h-6 w-6 text-white" />

              <span className="absolute end-0 top-0 -mt-1.5 me-0.5 flex md:size-3 size-2">
                <span className="absolute inline-flex md:size-6 size-5 rounded-full bg-cartBadge">
                  <span className="m-auto md:text-base text-sm"> 6</span>
                </span>
              </span>
            </button>

            <div className="xl:hidden lg:hidden block">
              {" "}
              <svg
                width="33"
                height="33"
                className="md:size-[50px] size-[40px]"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.5" cy="16.5" r="16.5" fill="#D9D9D9" />
                <path
                  d="M16.5006 17.5929C19.1193 17.5929 21.5008 18.3514 23.2528 19.4203C24.1272 19.9537 24.8748 20.5832 25.4147 21.2674C25.9459 21.9396 26.3371 22.744 26.3371 23.6041C26.3371 24.5277 25.8879 25.2556 25.2409 25.7747C24.6289 26.2666 23.8212 26.5923 22.9632 26.8196C21.2385 27.2754 18.9368 27.4295 16.5006 27.4295C14.0644 27.4295 11.7627 27.2765 10.038 26.8196C9.18003 26.5923 8.37234 26.2666 7.76029 25.7747C7.11217 25.2545 6.66406 24.5277 6.66406 23.6041C6.66406 22.744 7.05534 21.9396 7.58651 21.2663C8.12643 20.5832 8.87291 19.9548 9.74836 19.4192C11.5004 18.3525 13.883 17.5929 16.5006 17.5929ZM16.5006 5.5705C17.9499 5.5705 19.3399 6.14624 20.3648 7.17108C21.3896 8.19592 21.9653 9.5859 21.9653 11.0352C21.9653 12.4846 21.3896 13.8746 20.3648 14.8994C19.3399 15.9242 17.9499 16.5 16.5006 16.5C15.0513 16.5 13.6613 15.9242 12.6364 14.8994C11.6116 13.8746 11.0359 12.4846 11.0359 11.0352C11.0359 9.5859 11.6116 8.19592 12.6364 7.17108C13.6613 6.14624 15.0513 5.5705 16.5006 5.5705Z"
                  fill="#3E3E3E"
                  fill-opacity="0.75"
                />
              </svg>
            </div>

            <div className="xl:block lg:block hidden">
              <Link
                href="/login"
                className="rounded-lg bg-secondary px-[22px] py-3 font-semibold text-sm text-slate-700  duration-300 active:scale-95 me-4"
              >
                Login
              </Link>
              <Link
                href="/registration"
                className="rounded-lg border border-secondary px-[22px] py-3 font-semibold text-sm text-secondary duration-200 hover:bg-secondary hover:text-slate-700"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
