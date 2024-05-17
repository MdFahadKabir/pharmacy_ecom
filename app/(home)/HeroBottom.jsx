// import Image from "next/image";
// import React from "react";
// import { IoCall } from "react-icons/io5";
// import { IoBagAdd } from "react-icons/io5";

// const HeroBottom = () => {
//   return (
//     <>
//       <div className=" px-[65px] pt-20 xl:block lg:block  hidden">
//         <div className="grid grid-cols-4 xl:gap-28 lg:gap-10">
//           <div className="relative h-[230px] w-full inline-flex items-center p-3 text-sm font-medium  text-white bg-[#B594E0] rounded-2xl  ">
//             <div className="mt-4 flex justify-center mx-auto">
//               <div>
//                 <p className="text-[#080808] text-[18px] font-bold leading-[21.78px]">
//                   UPTO{" "}
//                 </p>
//                 <p className="text-[#3D3D45] font-bold text-[24px] leading-[29.05px]">
//                   10% OFF
//                 </p>
//                 <p className="mb-7 text-[#3D3D45] font-medium text-[22px] leading-[26.63px]">
//                   {" "}
//                   + CashBack
//                 </p>
//                 <button className=" rounded-[8px] font-bold text-[18px] leading-[21.5px] bg-white text-textDeep shadow-xl px-[16px] py-[14px] ">
//                   Order Now!{" "}
//                 </button>
//               </div>
//             </div>

//             <div className="absolute inline-flex items-center justify-center w-[114px] h-[114px] text-xs font-bold text-white bg-[#EBE1F6] rounded-full -top-9 -end-9 drop-shadow-xl">
//               <IoBagAdd className="text-[41px]  text-[#9F55F0]" />
//             </div>
//           </div>
//           <div className="relative h-[225px] w-full inline-flex items-center p-3 text-sm font-medium  text-white bg-[#6080D2] rounded-2xl  ">
//             <div className="mt-4 flex justify-center mx-auto">
//               <div>
//                 <p className="text-[#080808] text-[18px] font-bold ">UPTO </p>
//                 <p className="text-[#3D3D45] font-bold text-[24px] ">10% OFF</p>
//                 <p className="mb-7 text-[#3D3D45] font-medium text-[22px] ">
//                   {" "}
//                   + CashBack
//                 </p>
//                 <button className=" rounded-[8px] font-bold text-[18px] bg-white text-textDeep shadow-xl px-[16px] py-[14px] ">
//                   Order Now!{" "}
//                 </button>
//               </div>
//             </div>

//             <div className="absolute inline-flex items-center justify-center w-[114px] h-[114px] text-xs font-bold text-white bg-[#B8C6EB] rounded-full -top-9 -end-9 drop-shadow-xl">
//               <IoBagAdd className="text-[41px]  text-[#305CCD]" />
//             </div>
//           </div>
//           <div className="relative h-[225px] w-full inline-flex items-center p-3 text-sm font-medium  text-white bg-[#65C8D5] rounded-2xl  ">
//             <div className="mt-4 flex justify-center mx-auto">
//               <div>
//                 <p className="text-[#080808] text-[18px] font-bold ">UPTO </p>
//                 <p className="text-[#3D3D45] font-bold text-[24px] ">10% OFF</p>
//                 <p className="mb-7 text-[#3D3D45] font-medium text-[22px] ">
//                   {" "}
//                   + CashBack
//                 </p>
//                 <button className=" rounded-[8px] font-bold text-[18px] bg-white text-textDeep shadow-xl px-[16px] py-[14px] ">
//                   Order Now!{" "}
//                 </button>
//               </div>
//             </div>
//             <div className="absolute inline-flex items-center justify-center w-[114px] h-[114px] text-xs font-bold text-white bg-[#A4DEE6] rounded-full -top-9 -end-9 drop-shadow-xl">
//               <IoBagAdd className="text-[41px]  text-[#0B9FB4]" />
//             </div>
//           </div>

//           <div className="relative h-[225px] w-full inline-flex items-center p-3 text-sm font-medium  text-white bg-[#A4DEE6] rounded-2xl  ">
//             <div className="mt-4 flex justify-center mx-auto">
//               <div>
//                 <p className="text-textDeepSemi text-[18px] font-bold ">
//                   UPTO{" "}
//                 </p>
//                 <p className="text-textDeep font-bold text-[24px] ">10% OFF</p>
//                 <p className="mb-7 text-textDeep font-medium text-[22px] ">
//                   {" "}
//                   + CashBack
//                 </p>
//                 <button className=" rounded-[8px] font-bold text-[18px] bg-white text-textDeep shadow-xl px-[16px] py-[14px] ">
//                   Order Now!{" "}
//                 </button>
//               </div>
//             </div>

//             <div className="absolute inline-flex items-center justify-center xl:size-28 lg:size-24 text-xs font-bold text-white bg-[#EBE1F6] rounded-full -top-9 -end-9 drop-shadow-xl">
//               <IoBagAdd className="xl:text-[41px] lg:text-4xl  text-[#9F55F0]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroBottom;
import React from "react";
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";
const HeroBottom = () => {
  const links = [
    { background: "#B594E0", iconBg: "#EBE1F6", bagColor: "#9F55F0", href: "/prescription", title : "Prescription" },
    { background: "#6D8BD6", iconBg: "#B8C6EB", bagColor: "#305CCD"  , href: "/offer/20", title : "20% OFF + CashBack"},
    { background: "#6AC9D7", iconBg: "#A4DEE6", bagColor: "#0B9FB4"  , href: "/offer/20", title : "20% OFF + CashBack"},
    { background: "#FDB3D2", iconBg: "#FECFE3", bagColor: "#FF579D"  , href: "/offer/20", title : "20% OFF + CashBack"},
  ];

  return (
    <div className="px-[65px] pt-20 xl:block lg:block hidden">
      <div className="grid grid-cols-4 xl:gap-20 lg:gap-10">
        {links.map((variant, index) => (
          <div
            key={index}
            className={`relative xl:h-56 lg:h-52 w-full inline-flex items-center p-3 text-sm font-medium text-white rounded-2xl`}
            style={{ backgroundColor: variant.background }}
          >
            <div className="mt-4 flex justify-center mx-auto">
              <div>
                <p className="text-[#080808] text-[18px] font-bold ">{variant.title} </p>
                <p className="text-[#3D3D45] font-bold text-[24px] py-1">
                  10% OFF
                </p>
                <p className="mb-7 text-[#3D3D45] font-medium text-[22px] ">
                  {" "}
                  + CashBack
                </p>
              <Link href={variant.href}>
              <button className="rounded-[8px] font-bold text-[18px] bg-white text-textDeep shadow-xl px-[16px] py-[14px] ">
                  Order Now!{" "}
                </button>
              </Link>
              </div>
            </div>
            <div
              style={{ background: variant.iconBg }}
              className="absolute inline-flex items-center justify-center xl:size-28 lg:size-24 text-xs font-bold text-white rounded-full -top-9 -end-9 drop-shadow-xl"
            >
              <IoBagAdd
                className="xl:text-[41px] lg:text-3xl text-white"
                style={{ color: variant.bagColor }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBottom;
