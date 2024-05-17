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
          className="flex items-center whitespace-nowrap font-medium md:text-base text-sm  lg:py-10 pt-28 pb-6 md:ps-0"
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
            Visit Profile
          </li>
        </ol>

        {/* ... */}
        <div className="flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%] w-full">
            <p className="text-[22px] text-textDeep font-bold">Visit Profile</p>

            <hr className="my-5" />

            <div className="flex items-start gap-28 justify-center mb-10">
              <div className="flex items-center gap-3 p-4">
                <Image
                  height={200}
                  width={200}
                  className="inline-block size-[96px]  rounded-full ring-4 ring-secondary"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Image Description"
                />
              </div>

              <Link
                href="/accounts/profile/editProfile"
                className="lg:inline-flex items-center text-base text-primary underline hidden "
                aria-current="page"
              >
                Edit Profile
              </Link>
            </div>

            <div className="text-base">
              <p className="text-textMedium font-normal">Name</p>
              <p className="mb-4 font-bold text-textDeepSemi">
                Arman Hasan Molla
              </p>
              <p className="text-textMedium font-normal">Gender</p>
              <p className="mb-4 font-bold text-textDeepSemi">Male</p>

              <p className="text-textMedium font-normal">Date Of Birth</p>
              <p className="mb-4 font-bold text-textDeepSemi">12-01-1996</p>
              <p className="text-textMedium font-normal">Address</p>
              <p className="mb-4 font-bold text-textDeepSemi">
                1st Floor, House no. 85/A, Road no. 7, O R Nizam Road, Beside
                Sanmar Ocean City, GEC, Chattogram, Chittagong, Bangladesh
              </p>
              <p className="text-textMedium font-normal">Email</p>
              <p className="mb-4 font-bold text-textDeepSemi">Arman Molla</p>
              <p className="text-textMedium font-normal">Phone</p>
              <p className="mb-4 font-bold text-textDeepSemi">001010100</p>
            </div>
          </div>
        </div>

        <div className="md:px-20 mt-7">
          <Link
            href="/accounts/profile/editProfile"
            className=" items-center text-base  lg:hidden flex justify-center  border border-primeFade text-primeFade py-3 px-10 rounded-lg w-full"
            aria-current="page"
          >
            Edit Profile
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
