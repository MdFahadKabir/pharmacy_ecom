// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// const NavSecondary = () => {
//   const router = useRouter();

//   return (
//     <section className="px-[65px] py-7">
//       <div className="flex gap-10 text-sm font-medium text-[#9E9E9E]">
//         <NavItem href="/" label="Home" />
//         <NavItem href="/category" label="Category" />
//         <NavItem href="/prescription" label="Prescription" />
//         <NavItem href="/flash-sale" label="Flash Sale" />
//         <NavItem href="/about-us" label="About Us" />
//       </div>
//     </section>
//   );
// };

// const NavItem = ({ href, label }) => {
//   const router = useRouter();

//   const isActive = router.pathname === href;

//   return (
//     <Link href={href}>
//       <a className={`hover:text-primeFade cursor-pointer ${isActive ? 'underline' : ''}`}>{label}</a>
//     </Link>
//   );
// };

// export default NavSecondary;

import React from "react";
import Link from "next/link";
const NavSecondary = () => {
  return (
    <section className="px-[65px] py-7 xl:block lg:block hidden">
      <div className="flex gap-10 text-sm font-medium  text-[#9E9E9E] ">
        <Link href="#" className="hover:text-primeFade cursor-pointer">
          Home
        </Link>
        <Link
          href="/category/healthcare/sexualWellness"
          className="hover:text-primeFade cursor-pointer"
        >
          Category
        </Link>
        <Link
          href="/accounts/prescription"
          className="hover:text-primeFade cursor-pointer"
        >
          Prescription
        </Link>
        <Link href="#" className="hover:text-primeFade cursor-pointer">
          Flash Sale
        </Link>
        <Link href="#" className="hover:text-primeFade cursor-pointer">
          About Us
        </Link>
      </div>
    </section>
  );
};

export default NavSecondary;
