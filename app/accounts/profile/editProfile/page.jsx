import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import { CiCamera } from "react-icons/ci";
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

          <li className="inline-flex items-center">
            <Link
              className="flex items-center  text-textDeep hover:text-blue-600 focus:outline-none focus:text-blue-600"
              href="/accounts/profile"
            >
              Visit Profile
            </Link>
            <IoChevronForward className=" mx-2 size-4 text-textDeep" />
          </li>
          <li
            className="inline-flex items-center  text-gray-400 "
            aria-current="page"
          >
            Edit Profiles
          </li>
        </ol>

        {/* ... */}
        <div className="flex gap-20 mb-20">
          <ProfileNav />

          <div className="lg:w-[72%] w-full">
            <p className="text-[22px] text-textDeep font-bold">Edit Profile</p>

            <hr className="my-5" />

            <div className="flex flex-col items-center">
              <div className="mb-10">
                <div class="relative">
                  <Image
                    height={200}
                    width={200}
                    class="w-[85px] h-[85px] rounded-full bg-secondary p-3"
                    src="/user.png"
                    alt=""
                  />
                  <span class="bottom-0 left-16 absolute   bg-extraLight   rounded-full">
                    <CiCamera className="text-[12px] p-1 h-[20px] w-[20px]" />
                  </span>
                </div>
              </div>

              <div className="text-base md:w-7/12 w-full flex flex-col">
                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Name
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="text"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Gender
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="text"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Date Of Birth
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="text"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Address
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="text"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Email
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="email"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label class="block tracking-wide text-textDeepSemi  font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        class="appearance-none text-textMedium font-normal block w-full h-[40px]  border border-gray-300 rounded-[6px] py-3 px-4 focus:outline-none  focus:border-gray-500"
                        type="text"
                        placeholder="FKR Uddin"
                      />
                    </div>
                  </div>
                </div>

                <button class="lg:mt-10 mt-5 bg-primeFade hover:bg-blue-700 text-white font-bold py-2 px-4 mx-20 rounded-lg shadow-md focus:outline-none">
                  Update Information
                </button>
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
