"use client"

import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "next/link";

const SideNav = () => {

  const [isOpen, setIsOpen] = useState(null);

  const categoryData = [
    {
      id: 1,
      name: "Category 1",
      href: "/category1",
      subcategories: [
        { id: 1, name: "Subcategory 1", href: "/subcategory1" },
        { id: 2, name: "Subcategory 2", href: "/subcategory2" },
        { id: 3, name: "Subcategory 3", href: "/subcategory3" },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      href: "/category2",
      subcategories: [
        { id: 1, name: "Subcategory 1", href: "/subcategory1" },
        { id: 2, name: "Subcategory 2", href: "/subcategory2" },
        { id: 3, name: "Subcategory 3", href: "/subcategory3" },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      href: "/category3",
      subcategories: [
        { id: 1, name: "Subcategory 1", href: "/subcategory1" },
        { id: 2, name: "Subcategory 2", href: "/subcategory2" },
        { id: 3, name: "Subcategory 3", href: "/subcategory3" },
      ],
    },
  ]

  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => prevIdx === idx ? null : idx)
  }

  return (
    <div className="my-[122px] h-full border-e">
      {/* title part  */}
      <div className="flex justify-center items-center gap-2 my-6">
      <img src="/icons/categoryicon.png" alt="" className="w-8 h-8 object-contain" />
      <h2 className="text-[#3C8DE6] text-lg font-semibold">Shop By Category</h2>
      </div>
    <div className="">
    {categoryData.map((data, idx) => (
        <div className="" key={idx}>
          <div onClick={() => handleToggle(idx)}
            className={`transition-all duration-300 cursor-pointer ${isOpen === idx ? "bg-blue-300" : ""}  ${idx === data.length - 1 ? "border-none" : "border-b border-gray-100/10"} py-3 px-6 flex items-center gap-4 `}>
            <div>
              <img src="/icons/categoryicon.png" alt="" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[14px] text-black">{data?.name}</p>
              {/* <p className={`${idx === isOpen ? "text-white" : "text-gray-400"}`}>{data?.name}
            </p> */}
            </div>
            <div className={`duration-300 ease-in-out ${isOpen === idx ? "rotate-90 " : null}`}>
              <RiArrowRightSLine size={20} />
            </div>
          </div>

          <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className='overflow-hidden ps-4 '>
              <div className="text-[14px] text-black">
                {
                  data.subcategories.map((sub, idx) => (
                    <div
                      className={`cursor-pointer  ${idx === sub.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4`}>
                      <div>
                        <img src="/icons/categoryicon.png" alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[14px] text-black">{sub?.name}</p>
                      </div>
                      <div >
                        <RiArrowRightSLine size={20} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SideNav