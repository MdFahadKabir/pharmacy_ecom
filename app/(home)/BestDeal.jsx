import Link from "next/link";
import Image from "next/image";
const BestDeal = () => {
  const Categories = [
    {
      name: "Baby Care",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      link: "#",
    },
    {
      name: "Baby Care",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      link: "#",
    },
  ];

  return (
    <>
      <section className="lg:px-[65px] px-4 xl:pb-20 pb-10 mt-10">
        <p className="md:text-3xl text-xl text-center font-bold  text-slate-700 lg:pb-4 pb-7">
          Find The Best Deal Within Your Budget
        </p>
        <div className="grid lg:grid-cols-2 gap-9">
          {Categories.map((category, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end overflow-hidden lg:rounded-none rounded-lg"
            >
              <Link href="/best-deals">
                <Image
                  className="w-full xl:h-72 lg:h-60 md:h-52 h-40 "
                  width={200}
                  height={300}
                  src={category.image}
                  alt=""
                />
              </Link>

              <div className="absolute w-[50%] h-full bg-[#000000ad] py-4 text-center font-bold text-white text-[20px]  backdrop-blur-sm ">
                <div className="mt-4 flex justify-center mx-auto text-white">
                  <div className="mt-6">
                   <div>
                   <p className=" xl:text-3xl lg:text-2xl md:text-xl text-lg font-bold ">
                      0-499/BDT
                    </p>
                    <p className=" font-medium xl:text-[26px] lg:xl md:text-lg text-base  xl:mb-4 lg:mb-2 mt-2">
                      Store
                    </p>
                    <p className="xl:mb-7 lg:mb-5  font-medium xl:text-sm text-xs  xl:px-6 lg:px-2 lg:block hidden">
                      Every Products on this store will be under 499/bdt
                    </p>
                   </div>
                    <Link href="/best-deals" className="rounded-[8px] lg:mt-0 md:mt-7 mt-4  font-bold xl:text-lg lg:text-base md:text-sm text-xs  bg-primeFade text-white shadow-md lg:shadow-[#ffffff80]  lg:px-[16px] md:px-16 px-10 xl:py-[14px] lg:py-3 md:py-1.5 py-2 ">
                      Check Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestDeal;
