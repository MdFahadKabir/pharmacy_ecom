"use client";
import Image from "next/image";
import { useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const UploadPrescriptionForm = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <IoArrowUpCircleOutline
        onClick={() => setOpenModal(true)}
        className="text-7xl text-textMedium mb-5"
      />

      <div
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute drop-shadow-2xl ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          } `}
        >
          <div>
            <div className="rounded-2xl bg-secondary md:w-[565px] w-[370px] md:h-[451px] ">
              <div className="flex items-center justify-between px-8">
                <p className="font-medium text-base text-textDeepSemi py-3 pt-5">
                  Upload Prescription
                </p>
                <RxCross2 onClick={() => setOpenModal(false)} />
              </div>
              <hr className="border-primeFade" />

              <div className="px-8 pt-5">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      class="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John Dee"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                      Relation
                    </label>
                    <input
                      type="text"
                      class="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John Dee"
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      class="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Dr. John Dee"
                      required
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                      Date
                    </label>
                    <input
                      type="date"
                      class="bg-transparent border border-gray-400 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John Dee"
                      required
                    />
                  </div>
                </div>
                <div className="mb-7">
                  <label class="block mb-2 text-sm font-semibold text-textDeepSemi">
                    Type Of Disease
                  </label>
                  <input
                    type="text"
                    class="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                    placeholder="High fever, diarrhea, vomiting"
                    required
                  />
                </div>
                <div className="flex justify-between items-end md:pb-0 pb-5">
                  <div class="relative">
                    <label
                      title="Click to upload"
                      for="button2"
                      class="cursor-pointer flex items-center gap-4 before:border-gray-400/60 hover:before:border-gray-300 group before:absolute before:inset-0  "
                    >
                      <div class="w-max relative">
                        <Image
                          class="w-11 object-contain"
                          src="/upload.png"
                          alt="file upload icon"
                          width="512"
                          height="512"
                        />
                      </div>
                      <div class="relative">
                        <span class="block relative text-textDeep text-sm  font-bold">
                          Upload Prescription
                        </span>
                        <span class="mt-0.5 block text-[10px] font-medium text-gray-500">
                          Only image files are allowed <br />
                          Upload within 2 MB
                        </span>
                      </div>
                    </label>
                    <input
                      hidden="true"
                      type="file"
                      name="button2"
                      id="button2"
                    />
                  </div>

                  <button
                    type="submit"
                    class="text-white bg-primeFade md:text-sm text-xs font-medium rounded-lg md:px-6 px-3 py-3"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
