import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center lg:pt-60 pt-32">
      <div>
        <div className="rounded-2xl border-gray-200 shadow-sm border  md:w-[565px] w-[400px] pb-7 ">
          <div className="flex items-center justify-between px-8">
            <p className="font-medium text-base text-textDeepSemi py-3 pt-5">
              Registration
            </p>
          </div>
          <hr className="border-gray-200" />

          <div className="px-8 pt-5">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                  First Name
                </label>
                <input
                  type="text"
                  class="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                  Last Name
                </label>
                <input
                  type="text"
                  class="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Dee"
                  required
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                  Email
                </label>
                <input
                  type="email"
                  class="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                  placeholder="fkr@gmail.com"
                  required
                />
              </div>

              <div>
                <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                  Mobile
                </label>
                <input
                  type="text"
                  class="bg-transparent border border-gray-200 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                  placeholder="+99082828"
                  required
                />
              </div>
            </div>
            <div className="mb-7">
              <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                Password
              </label>
              <input
                type="password"
                class="bg-transparent border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="**********"
                required
              />
            </div>

            <button
              type="submit"
              class="text-white bg-primeFade md:text-sm text-xs font-medium rounded-lg md:px-6 px-3 py-3 w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
