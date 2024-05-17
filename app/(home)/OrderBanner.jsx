"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoCall } from "react-icons/io5";
import ReactPlayer from 'react-player/file'
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const OrderBanner = () => {
  const [playing, setPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const iconTimeout = useRef(null);

  useEffect(() => {
    if (playing) {
      iconTimeout.current = setTimeout(() => {
        setShowIcon(false);
      }, 1500);
    } else {
      clearTimeout(iconTimeout.current);
      setShowIcon(true);
    }
  }, [playing]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleMouseEnter = () => {
    clearTimeout(iconTimeout.current);
    setIsHovered(true);
    iconTimeout.current = setTimeout(() => {
      setShowIcon(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (playing) {
      iconTimeout.current = setTimeout(() => {
        setShowIcon(false);
      }, 500);
    }
  };

  return (
    <div>
      <div className=" lg:px-[65px] px-4">
        <div className="rounded-[20px] md:py-14 py-7 bg-[#DAECFF]">
          {/* mbl */}
          <p className="text-[#464C52] text-xl font-bold text-center mb-7 lg:hidden block">
            How to order at <span className="text-primeFade">Emedi Pharma</span>{" "}
          </p>
          {/*web ... */}

          <div className="lg:flex justify-between items-center mx-10">
            <div className="lg:block hidden ">
              <p className="text-[#464C52] text-2xl font-bold leading-[29.05px]">
                How to order at{" "}
                <span className="text-primeFade">Emedi Pharma</span>{" "}
              </p>
              <ul className="list-disc ps-8 mt-4 font-normal text-base text-[#4F565D]  w-[95%]">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>rem ipsum dolor sit amet consectetur.</li>
                <li>orem ipsum dolor sit amet consectetur.</li>
                <li>ipsum dolor sit amet consectetur. Lorem ipsum .</li>
              </ul>

              <button className="border border-[#3C8DE6] rounded-xl  py-2 px-3 mt-11">
                <div className="text-[#4F565D] flex items-center gap-2">
                  <IoCall className="text-[27px] text-primeFade" />

                  <div>
                    <p className="text-base font-medium leading-[22px]">
                      Call for any queries
                    </p>
                    <p className="text-lg font-bold leading-[22px]">
                      +8801 234 567
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/*  */}

            <div className="lg:px-0 md:px-6 px-4 player-wrapper relative pt-10">
              {/* <video className="w-[434px] h-[291px]"  src="/video/bannervid.mp4" width="600" height="100"  /> */}
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ReactPlayer
                  className=''
                  controls={false}
                  playing={playing}
                  onClick={handlePlayPause}
                  url='/video/bannervid.mp4'
                />
                {showIcon ? (
                  <div className={`translate-x-72 -translate-y-56 transition-all icon-container ${showIcon ? 'visible' : 'hidden'}`}>
                    {playing ? (
                      <FaPauseCircle size={80} className="text-blue-500 bg-blue-100 p-3 rounded-full" onClick={handlePlayPause} />
                    ) : (
                      <FaPlayCircle size={80} className="text-blue-500 bg-blue-100 p-3 rounded-full" onClick={handlePlayPause} />
                    )}
                  </div>
                ) : <FaPauseCircle size={80} className="hiddenicon opacity-0" onClick={handlePlayPause} />}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBanner;
