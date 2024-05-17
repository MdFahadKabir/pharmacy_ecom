import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
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
            Special Offers
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold">
              Special Offers
            </p>
            {/* ... */}
            <div className="flex flex-col lg:w-[75%]">
              <div class="flex gap- items-center bg-violetLight px-4 py-5 rounded-2xl mt-6 ">
                <div>
                  <Image
                    src="/ticket.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-[64px] object-contain"
                  />
                </div>
                <div class="text-left text-xl font-bold">
                  <p class=" text-primeFade">Cashback</p>
                  <p class="text-textDeep">৳100</p>
                </div>
                <div class="text-left ms-10 text-lg font-medium ">
                  <p class=" text-textDeepSemi">For purchasing above</p>
                  <p class="text-textDeepSemi font-bold">৳10000</p>
                </div>
              </div>
              <div class="flex gap- items-center bg-secondaryLight px-4 py-5 rounded-2xl mt-6 ">
                <div>
                  <Image
                    src="/ticket.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-[64px] object-contain"
                  />
                </div>
                <div class="text-left text-xl font-bold">
                  <p class=" text-primeFade">Cashback</p>
                  <p class="text-textDeep">৳100</p>
                </div>
                <div class="text-left ms-10 text-lg font-medium ">
                  <p class=" text-textDeepSemi">For purchasing above</p>
                  <p class="text-textDeepSemi font-bold">৳10000</p>
                </div>
              </div>
              <div class="flex gap- items-center bg-pinkLight px-4 py-5 rounded-2xl mt-6 ">
                <div>
                  <Image
                    src="/ticket.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-[64px] object-contain"
                  />
                </div>
                <div class="text-left text-xl font-bold">
                  <p class=" text-primeFade">Cashback</p>
                  <p class="text-textDeep">৳100</p>
                </div>
                <div class="text-left ms-10 text-lg font-medium ">
                  <p class=" text-textDeepSemi">For purchasing above</p>
                  <p class="text-textDeepSemi font-bold">৳10000</p>
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
