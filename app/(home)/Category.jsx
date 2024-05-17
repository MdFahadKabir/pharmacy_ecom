import Link from "next/link";
import Image from "next/image";
const Category = () => {
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
    {
      name: "Baby Care",
      image: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      link: "#",
    },
    // Add more products as needed
  ];

  return (
    <>
      <section className="lg:px-[65px] px-4 md:pb-20 pb-10">
        <p className="lg:text-3xl text-xl font-bold leading-[36.31px] text-slate-700 pb-4">
          Category
        </p>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 xl:gap-9 gap-4">
          {Categories.map((category, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end overflow-hidden border-gray-200 rounded-2xl"
            >
              <Link href='/category/healthcare/sexual-wellness'>
                <Image
                  className="w-full xl:h-48 md:h-40 h-32 "
                  width={200}
                  height={300}
                  src={category.image}
                  alt=""
                />
              </Link>

              <div className="absolute w-full bg-[#557a80e1] xl:py-4 md:py-2.5 py-2 text-center font-bold text-white xl:text-xl  lg:text-lg md:text-base text-sm">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
