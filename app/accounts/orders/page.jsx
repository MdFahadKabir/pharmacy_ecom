import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
import { FaHouse } from "react-icons/fa6";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
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
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Orders
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold">Mainul</p>

            <div className="flex md:gap-5 gap-3 mt-7">
              <button className="bg-primeFade rounded-lg text-white font-semibold md:text-base text-sm md:px-5 px-3 py-2">
                {" "}
                All
              </button>
              <button className="text-textMedium border border-textMedium rounded-lg  font-medium md:text-base text-sm md:px-5 px-3 py-2">
                {" "}
                Confirmed
              </button>
              <button className="text-textMedium border border-textMedium rounded-lg  font-medium md:text-base text-sm md:px-5 px-3 py-2">
                {" "}
                Delivered
              </button>
              <button className="text-textMedium border border-textMedium rounded-lg  font-medium md:text-base text-sm md:px-5 px-3 py-2">
                {" "}
                Cancelled
              </button>
            </div>
            {/* .. */}
            <div className="border pt-3 pb-5 mx-auto rounded-2xl mt-8">
              <div className="flex justify-between border-gray-200 px-8 py-4">
                <div className=" flex items-center justify-between">
                  <p className="text-base text-textDeep font-semibold">
                    Order ID: #8126524
                  </p>
                </div>
                <div className="text-textMedium">
                  <p className="text-xs font-semibold">
                    <span className="text-textDeepSemi"> Date:</span>{" "}
                    14-March-2024 02:39 PM
                  </p>
                </div>
              </div>
              <hr />
              <div className="px-8 py-4">
                <div className="flex items-start gap-2 ">
                  <FaHouse className="text-textDeep mt-1.5 text-xl" />
                  <div className="text-base text-textDeepSemi">
                    {" "}
                    <p>Muntasir Hasan</p>
                    <p>+8801829337594, Gazi dipo lane,</p>
                    <p>Lama, Bandarban, Chattogram</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-8 text-base font-semibold text-textDeep mt-3 mb-1">
                <p>Amount payable</p>
                <p>৳1,125</p>
              </div>

              <div className="px-8">
                <p className="text-xs font-normal  mb-4 text-textDeepSemi">
                  Your order will be processed after making payment.
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <p className="text-textDeep">Status:</p>
                  <button className="bg-[#2EB200] text-white px-2 py-1 rounded-lg">
                    {" "}
                    confirmed
                  </button>
                </div>
              </div>

              <div className="flex justify-end px-5">
                <Link
                  href="#"
                  className="mr-2 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  Pay Now
                </Link>
                <Link
                  href="/accounts/orders/orderDetails"
                  className="rounded-lg border border-gray-400 px-5 py-2.5 text-sm text-gray-500 hover:text-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="border pt-3 pb-5 mx-auto rounded-2xl mt-5  mb-20">
              <div className="flex justify-between border-gray-200 px-8 py-4">
                <div className=" flex items-center justify-between">
                  <p className="text-base text-textDeep font-semibold">
                    Order ID: #8126524
                  </p>
                </div>
                <div className="text-textMedium">
                  <p className="text-xs font-semibold">
                    <span className="text-textDeepSemi"> Date:</span>{" "}
                    14-March-2024 02:39 PM
                  </p>
                </div>
              </div>
              <hr />
              <div className="px-8 py-4">
                <div className="flex items-start gap-2 ">
                  <FaHouse className="text-textDeep mt-1.5 text-xl" />
                  <div className="text-base text-textDeepSemi">
                    {" "}
                    <p>Muntasir Hasan</p>
                    <p>+8801829337594, Gazi dipo lane,</p>
                    <p>Lama, Bandarban, Chattogram</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-8 text-base font-semibold text-textDeep mt-3 mb-1">
                <p>Amount payable</p>
                <p>৳1,125</p>
              </div>

              <div className="px-8">
                <p className="text-xs font-normal  mb-4 text-textDeepSemi">
                  Your order will be processed after making payment.
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <p className="text-textDeep">Status:</p>
                  <button className="bg-[#2EB200] text-white px-2 py-1 rounded-lg">
                    {" "}
                    confirmed
                  </button>
                </div>
              </div>

              <div className="flex justify-end px-5">
                <Link
                  href="#"
                  className="mr-2 rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                >
                  Pay Now
                </Link>
                <Link
                  href="/accounts/orders/orderDetails"
                  className="rounded-lg border border-gray-400 px-5 py-2.5 text-sm text-gray-500 hover:text-blue-500"
                >
                  View Details
                </Link>
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
