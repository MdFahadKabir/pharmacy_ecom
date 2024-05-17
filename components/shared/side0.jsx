"use client"

import { useState } from "react";

import categoryimg1 from "/icons/categoryicon.png";

export const SideNav = () => {
    const [isOpen, setIsOpen] = useState(null);

    const categoryData = [
        {   
            id: 1,
            name: "Category 1",
            href: "/category1",
            image : categoryimg1,
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
            image : categoryimg1,
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
            image : categoryimg1,
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
        <div className="my-20 bg-[#18181B] rounded-lg">
            {/* title part  */}
            {categoryData.map((data, idx) => (
                <div key={idx}>
                    <div onClick={() => handleToggle(idx)}
                        className={`${idx === data.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4`}>
                        <div>
                            <img src={data.image} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-lg text-white">{data?.title}</p>
                            <p className="text-gray-400">{data?.subTitle}
                                {/*give color based on condition */}
                                <span className={`${idx === 0 ? "text-[#0095FF]" : idx === 1 ? "text-white" : idx === 2 ? "text-amber-500" : idx === 3 ? "text-[#f54885]" : "text-gray-500"}`}>
                                    {data.coloredText}
                                </span>
                            </p>
                        </div>
                        <div className={`duration-300 ease-in-out ${isOpen === idx ? "-rotate-90 " : null}`}>svg</div>
                    </div>

                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className='overflow-hidden'>
                            <div className={`bg-zinc-800 p-6 text-gray-400 `}>
                                {data?.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};