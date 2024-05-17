import Link from "next/link";
import Image from "next/image";

const DermaCareProducts = () => {
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
    <section className="lg:px-[65px] px-4 lg:py-20 pt-10">
      <p className="md:text-3xl text-xl font-bold  text-slate-700 pb-4">
        Derma Care Products
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-9 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-secondary rounded-2xl md:my-4 h-[#389px] p-4 hover:drop-shadow-xl"
          >
            <Link href={product.link} className="flex justify-center md:mb-10">
              <Image
                width={200}
                height={300}
                className="w-52 object-contain p-3"
                alt={product.name}
                src={product.image}
              />
            </Link>
            <div className="">
              <Link href={product.link}>
                <p className="mb-7 text-sm font-bold text-slate-700 line-clamp-2 ">
                  {product.name}
                </p>
              </Link>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium line-through text-slate-400 ">
                    ৳1050
                  </p>
                  <p className="text-lg font-bold  text-primary">৳1050</p>
                </div>

                <Link
                  href={product.link}
                  className="px-4 py-1 text-base font-semibold text-primeFade border border-primeFade rounded-[4px] hover:bg-slate-100"
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

export default DermaCareProducts;
