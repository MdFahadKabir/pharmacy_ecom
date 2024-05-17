import Image from "next/image";
import React from "react";

const SuggestForm = () => {
  return (
    <div>
      <div className="rounded-2xl border lg:w-[565px] pb-7 mt-6">
        <p className="font-medium text-base text-textDeepSemi px-8 py-3 pt-5">
          Suggestions
        </p>
        <hr className="border-gray-200" />

        <div className="px-8 pt-5">
          <div className="">
            <div>
              <label className="block mb-2 text-sm font-semibold text-textDeepSemi">
                Product Name Name
              </label>
              <input
                type="text"
                className="bg-gray-100  text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="John Dee"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-semibold text-textDeepSemi">
                Company
              </label>
              <input
                type="text"
                className="bg-gray-100  text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Dr. John Dee"
                required
              />
            </div>
          </div>

          <div className=" bg-secondaryLight rounded-lg my-4 w-72 p-3">
            <div className="relative">
              <label
                title="Click to upload"
                for="button2"
                className="cursor-pointer flex items-center gap-4 before:border-gray-400/60 hover:before:border-gray-300 group before:absolute before:inset-0  "
              >
                <div className="w-max relative">
                  <Image
                    className="w-11 object-contain"
                    src="/upload.png"
                    alt="file upload icon"
                    width="512"
                    height="512"
                  />
                </div>
                <div className="relative">
                  <span className="block relative text-textDeep text-sm  font-bold">
                    Upload Prescription
                  </span>
                  <span className="mt-0.5 block text-[10px] font-medium text-gray-500">
                    Only image files are allowed <br />
                    Upload within 2 MB
                  </span>
                </div>
              </label>
              <input hidden="true" type="file" name="button2" id="button2" />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primeFade text-sm font-medium rounded-lg px-6 py-3 w-full"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestForm;
