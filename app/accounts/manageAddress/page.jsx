import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
import { FaHouse } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

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
            Manage Address
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
            <div className="border  mx-auto rounded-2xl mt-8">
              <div className="flex justify-between border-gray-200 px-6 py-3">
                <div className=" flex items-center justify-between">
                  <div className="text-base text-textDeep font-semibold">
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <p className="text-textDeep">Home Address</p>
                      <button className="bg-[#2EB200] text-white text-xs px-2 py-1 rounded-lg">
                        {" "}
                        Deafault
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-textMedium">
                  <HiDotsHorizontal />
                </div>
              </div>
              <hr />
              <div className="px-6 py-3">
                <div className="flex items-start gap-2 ">
                  <FaHouse className="text-textDeep mt-1.5 text-xl" />
                  <div className="text-base font-normal text-textDeepSemi">
                    {" "}
                    <p>Muntasir Hasan</p>
                    <p>+8801829337594, Gazi dipo lane,</p>
                    <p>Lama, Bandarban, Chattogram</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="border  mx-auto rounded-2xl mt-8">
              <div className="flex justify-between border-gray-200 px-6 py-3">
                <div className=" flex items-center justify-between">
                  <div className="text-base text-textDeep font-semibold">
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <p className="text-textDeep">Home Address</p>
                      <button className="bg-[#2EB200] text-white text-xs px-2 py-1 rounded-lg">
                        {" "}
                        Deafault
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-textMedium">
                  <HiDotsHorizontal />
                </div>
              </div>
              <hr />
              <div className="px-6 py-3">
                <div className="flex items-start gap-2 ">
                  <FaHouse className="text-textDeep mt-1.5 text-xl" />
                  <div className="text-base font-normal text-textDeepSemi">
                    {" "}
                    <p>Muntasir Hasan</p>
                    <p>+8801829337594, Gazi dipo lane,</p>
                    <p>Lama, Bandarban, Chattogram</p>
                  </div>
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
