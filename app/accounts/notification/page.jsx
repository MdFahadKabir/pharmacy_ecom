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
            Notification
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold">Notification</p>
            <div class="rounded-lg p-4 border shadow-sm mt-10 mb-4">
              <div class="flex items-start justify-between">
                <div class="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-2.5">
                  <svg
                    width="20"
                    height="20"
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
                <div class="text-textDeep text-sm w-[70%]">
                  <div class="font-bold">Order Created</div>
                  <div class="font-medium">
                    Emedi has received your order #815200 successfully.
                  </div>
                </div>

                <div>
                  <p class="text-xs font-normal">14-March-2024 02:39 PM</p>
                </div>
              </div>
            </div>
            <div class="rounded-lg p-4 border shadow-sm  mb-4">
              <div class="flex items-start justify-between">
                <div class="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-2.5">
                  <svg
                    width="20"
                    height="20"
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
                <div class="text-textDeep text-sm w-[70%]">
                  <div class="font-bold">Order Created</div>
                  <div class="font-medium">
                    Emedi has received your order #815200 successfully.
                  </div>
                </div>

                <div>
                  <p class="text-xs font-normal">14-March-2024 02:39 PM</p>
                </div>
              </div>
            </div>
            <div class="rounded-lg p-4 border shadow-sm  mb-4">
              <div class="flex items-start justify-between">
                <div class="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-2.5">
                  <svg
                    width="20"
                    height="20"
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
                <div class="text-textDeep text-sm w-[70%]">
                  <div class="font-bold">Order Created</div>
                  <div class="font-medium">
                    Emedi has received your order #815200 successfully.
                  </div>
                </div>

                <div>
                  <p class="text-xs font-normal">14-March-2024 02:39 PM</p>
                </div>
              </div>
            </div>
            <div class="rounded-lg p-4 border shadow-sm  mb-4">
              <div class="flex items-start justify-between">
                <div class="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-2.5">
                  <svg
                    width="20"
                    height="20"
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
                <div class="text-textDeep text-sm w-[70%]">
                  <div class="font-bold">Order Created</div>
                  <div class="font-medium">
                    Emedi has received your order #815200 successfully.
                  </div>
                </div>

                <div>
                  <p class="text-xs font-normal">14-March-2024 02:39 PM</p>
                </div>
              </div>
            </div>
            <div class="rounded-lg p-4 border shadow-sm  mb-4">
              <div class="flex items-start justify-between">
                <div class="mr-4 flex-shrink-0 rounded-full bg-blue-50 p-2.5">
                  <svg
                    width="20"
                    height="20"
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
                <div class="text-textDeep text-sm w-[70%]">
                  <div class="font-bold">Order Created</div>
                  <div class="font-medium">
                    Emedi has received your order #815200 successfully.
                  </div>
                </div>

                <div>
                  <p class="text-xs font-normal">14-March-2024 02:39 PM</p>
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
