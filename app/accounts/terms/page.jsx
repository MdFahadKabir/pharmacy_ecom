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
            Terms & Conditions
          </li>
        </ol>

        {/* ... */}
        <div className="lg:flex gap-20">
          <ProfileNav />

          <div className="lg:w-[72%]">
            <p className="text-[22px] text-textDeep font-bold mb-5">
              Terms & Conditions
            </p>

            <div className="text-xs text-textDeepSemi font-normal">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                cumque cum veritatis hic placeat adipisci accusamus, enim optio
                quae fugit modi natus neque corrupti sequi, at reprehenderit,
                mollitia tenetur tempore!
              </p>
              <br />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                similique laborum nulla voluptate soluta vitae expedita
                laudantium, laboriosam, pariatur culpa provident nobis natus
                voluptas reiciendis dolores architecto alias ex libero.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                minima corrupti quia corporis aliquid praesentium, ratione
                maxime odio magnam qui explicabo laboriosam ut reiciendis
                itaque, excepturi impedit, similique eius aliquam.
              </p>
              <br />

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore delectus laudantium libero atque blanditiis dolorum
                nostrum enim ab optio, commodi ipsum tempore numquam molestias.
                Totam ullam alias error magni animi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
