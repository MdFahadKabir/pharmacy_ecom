import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
import { IoCopyOutline } from "react-icons/io5";

const page = () => {
  return (
    <>
      <section section className="lg:px-[65px] px-4 lg:mt-20 mt-4 mb-20">
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
            Refer & Earn
          </li>
        </ol>
        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="xl:w-[52%] lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold mb-6">
              Refer & Earn
            </p>

            <Image
              className="object-cover"
              src="https://images.pexels.com/photos/7792318/pexels-photo-7792318.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={500}
              height={500}
              className="w-full h-[225px] rounded-2xl"
              alt=""
            />

            <p className="text-center text-[22px] fontbold text-textDeep my-2 mt-8">
              Invite friends. Earn money.
            </p>

            <div className="flex items-center gap-2 justify-center">
              <p className="text-base font-medium text-textDeepSemi text-center">
                Your referral code: <span className="font-bold">AAAEJT</span>
              </p>
              <IoCopyOutline className="text-primeFade" />
            </div>
            <div className="py-10 px-14">
              <div class="flex rounded-lg">
                <input
                  type="text"
                  placeholder="Enter Referal Code"
                  class="block w-full rounded-s-2xl bg-lighter px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                />
                <button
                  type="button"
                  class="inline-flex text-base font-medium flex-shrink-0 items-center justify-center gap-x-2 rounded-e-2xl border border-transparent bg-primeFade px-5 py-3 text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                >
                  Redeem
                </button>
              </div>
            </div>

            <p className="text-base font-medium text-textDeep text-center">
              You will get 40 Taka each time your friends join with your <br />
              referral code and place their first order. Make sure they enter{" "}
              <br />
              this code while signing up for Emedi. <br /> * Your referral code
              is valid for lifetime.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
