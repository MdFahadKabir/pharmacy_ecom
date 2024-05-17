import Link from "next/link";
import Image from "next/image";

const BestDealProducts = () => {
  // Define an array of baby care products
  const products = [
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "1",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "2",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "3",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "4",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "5",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "6",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "7",
    },
    {
      name: "Dabur PowerJit Gold Capsules With High Fiber ",
      image: "/shila.jpg",
      link: "8",
    },
    // Add more products as needed
  ];

  return (
    <section className="lg:px-[65px] px-4 lg:py-20 pt-10">
      <p className="md:text-3xl text-xl font-bold  text-slate-700 pb-4">
        Best Deals Products
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-9 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-secondary rounded-2xl md:my-4 h-[#389px] p-4 hover:drop-shadow-xl"
          >
            <Link href="/product" className="flex justify-center md:mb-10">
              <Image
                width={200}
                height={300}
                className="w-52 object-contain p-3"
                alt={product.name}
                src={product.image}
              />
            </Link>
            <div className="">
              <p className="mb-7 text-sm font-bold text-slate-700 line-clamp-2 ">
                {product.name}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium line-through text-slate-400 ">
                    ৳1050
                  </p>
                  <p className="text-lg font-bold  text-primary">৳1050</p>
                </div>

                <Link
                  // href={`/product/${product.link}`}
                  href="/product"
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

export default BestDealProducts;
