import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
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
            Transaction History
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold">
              Transaction History
            </p>

            {/* .. */}
            <div className="border  mx-auto rounded-2xl mt-6">
              <div className="flex justify-between border-gray-200 px-6 py-3">
                <div className=" flex items-center justify-between">
                  <div className="text-base text-textDeep font-semibold">
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <p className="text-textDeep">Order #89722</p>
                    </div>
                  </div>
                </div>
                <div className="text-textMedium">
                  <HiDotsHorizontal />
                </div>
              </div>
              <hr />
              <div className="flex items-center  justify-between px-6 py-3">
                <div>
                  <div className=" text-textDeepSemi">
                    {" "}
                    <p className="text-lg font-bold">Muntasir Hasan</p>
                    <p className="text-xs font-semibold mb-2 mt-1">
                      Date:{" "}
                      <span className="text-textMedium">
                        14-March-2024 02:39 PM
                      </span>
                    </p>
                  </div>
                  <button className="bg-[#2EB200] text-white text-xs px-2 py-1 rounded-lg">
                    {" "}
                    Payment made through Bkash
                  </button>
                </div>

                <div>
                  <button className="bg-white text-gray-400 border border-gray-400 text-sm px-4 py-2 rounded-lg">
                    {" "}
                    VIew Detais
                  </button>
                </div>
              </div>
            </div>
            {/* .. */}
            <div className="border  mx-auto rounded-2xl mt-6">
              <div className="flex justify-between border-gray-200 px-6 py-3">
                <div className=" flex items-center justify-between">
                  <div className="text-base text-textDeep font-semibold">
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <p className="text-textDeep">Order #89722</p>
                    </div>
                  </div>
                </div>
                <div className="text-textMedium">
                  <HiDotsHorizontal />
                </div>
              </div>
              <hr />
              <div className="flex items-center  justify-between px-6 py-3">
                <div>
                  <div className=" text-textDeepSemi">
                    {" "}
                    <p className="text-lg font-bold">Muntasir Hasan</p>
                    <p className="text-xs font-semibold mb-2 mt-1">
                      Date:{" "}
                      <span className="text-textMedium">
                        14-March-2024 02:39 PM
                      </span>
                    </p>
                  </div>
                  <button className="bg-[#2EB200] text-white text-xs px-2 py-1 rounded-lg">
                    {" "}
                    Payment made through Bkash
                  </button>
                </div>

                <div>
                  <button className="bg-white text-gray-400 border border-gray-400 text-sm px-4 py-2 rounded-lg">
                    {" "}
                    VIew Detais
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
