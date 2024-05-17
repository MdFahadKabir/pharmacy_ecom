import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import ProfileNav from "@/components/shared/ProfileNav";
import Footer from "@/components/shared/Footer";
import { GoDotFill } from "react-icons/go";
import { UploadPrescriptionForm } from "./UploadPrescriptionForm";

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
            Prescription
          </li>
        </ol>
        {/* ... */}
        <div className="flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%] w-full">
            <p className="text-[22px] text-textDeep font-bold">
              You have uploaded 3 prescriptions
            </p>

            <hr className="my-5" />

            <div className="lg:block flex lg:justify-start justify-center">
              <div className="grid md:grid-cols-2 gap-10 lg:pb-20 ">
                <div>
                  <div className="relative m-1 ms-0 flex disabled:pointer-events-none">
                    <div className="flex flex-col">
                      <div>
                        {" "}
                        <p className="font-semibold text-lg text-textDeep">
                          Arman Malik
                        </p>
                        <div className="text-base font-medium text-textDeepSemi">
                          <div className="flex items-center">
                            {" "}
                            <p>Brother </p>
                            <p>
                              <GoDotFill />
                            </p>{" "}
                            <p>21 February, 2024</p>
                          </div>
                          <p>
                            Prescribed by: <span>Dr. FKR Uddin</span>
                          </p>
                          <p className="font-bold">High Fever , Bomi, Loose </p>
                        </div>
                      </div>

                      <Image
                        className="w-[258px] mt-3 h-[267px] object-contain"
                        width={500}
                        height={500}
                        src="/prescription.png"
                        alt=""
                      />
                    </div>

                    <span className="absolute start-60 top-0 -mt-1.5 me-0.5 flex size-3">
                      <span className="absolute inline-flex size-6 rounded-full bg-red-500 text-white">
                        <span className=" m-auto text-base"> X</span>
                      </span>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative m-1 ms-0 flex disabled:pointer-events-none">
                    <div className="flex flex-col">
                      <div>
                        {" "}
                        <p className="font-semibold text-lg text-textDeep">
                          Arman Malik
                        </p>
                        <div className="text-base font-medium text-textDeepSemi">
                          <div className="flex items-center">
                            {" "}
                            <p>Brother </p>
                            <p>
                              <GoDotFill />
                            </p>{" "}
                            <p>21 February, 2024</p>
                          </div>
                          <p>
                            Prescribed by: <span>Dr. FKR Uddin</span>
                          </p>
                          <p className="font-bold">High Fever , Bomi, Loose </p>
                        </div>
                      </div>

                      <Image
                        className="w-[258px] mt-3 h-[267px] object-contain"
                        width={500}
                        height={500}
                        src="/prescription.png"
                        alt=""
                      />
                    </div>

                    <span className="absolute start-60 top-0 -mt-1.5 me-0.5 flex size-3">
                      <span className="absolute inline-flex size-6 rounded-full bg-red-500 text-white">
                        <span className=" m-auto text-base"> X</span>
                      </span>
                    </span>
                  </div>
                </div>

                {/* up */}
                <div class="pt-0 flex flex-col">
                  <label
                    for="product_image"
                    class="flex flex-col items-center justify-center bg-extraLight w-[258px] h-[267px] cursor-pointer"
                  >
                    <div className="flex flex-col  items-center">
                      {" "}
                      <UploadPrescriptionForm />
                      <p className="text-primeFade font-bold text-xl text-center">
                        Upload <br /> Prescription
                      </p>
                    </div>

                    {/* <input type="file" id="product_image" class="hidden" /> */}
                  </label>
                </div>

                <div class="pt-0 flex flex-col">
                  <label
                    for="product_image"
                    class="flex flex-col items-center justify-center bg-extraLight w-[258px] h-[267px] cursor-pointer"
                  >
                    <div className="flex flex-col  items-center">
                      {" "}
                      <UploadPrescriptionForm />
                      <p className="text-primeFade font-bold text-xl text-center">
                        Upload <br /> Prescription
                      </p>
                    </div>

                    {/* <input type="file" id="product_image" class="hidden" /> */}
                  </label>
                </div>

                {/* .....end */}
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
