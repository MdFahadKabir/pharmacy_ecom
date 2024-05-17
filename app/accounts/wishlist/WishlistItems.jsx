import Link from "next/link";
import Image from "next/image";

const WishistItems = () => {
  // Define an array of baby care products
  const products = [
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "#",
    },
    // Add more products as needed
  ];

  return (
    <section className="mt-7">
      <div className="grid md:grid-cols-3 grid-cols-2  md:gap-9 gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-[#C1DFFF] rounded-2xl h-[#389px] p-4 hover:drop-shadow-xl"
          >
            <Link href={product.link} className="flex justify-center mb-10">
              <Image
                width={200}
                height={300}
                className=""
                alt={product.name}
                src={product.image}
              />
            </Link>
            <div className="">
              <Link href={product.link}>
                <p className="mb-2 text-sm font-bold leading-[#16.94px] text-slate-700 line-clamp-2 ">
                  {product.name}
                </p>
              </Link>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium leading-[#16.94px] line-through text-slate-400 ">
                    ৳1050
                  </p>
                  <p className="text-lg font-bold leading-[#21.78px]  text-[#0067D8]">
                    ৳1050
                  </p>
                </div>

                <Link
                  href={product.link}
                  className="px-4 py-1 text-base font-semibold text-[#3C8DE6]  border border-[#3C8DE6]  rounded-[4px] hover:bg-slate-100"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WishistItems;
