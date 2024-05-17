import React from "react";
import Link from "next/link";
import Image from "next/image";

const Messenger = () => {
  return (
    <>
      <Link
        href="#"
        className="xl:flex lg:flex justify-end pe-10 xl:py-3 pb-7 hidden"
      >
        <button className="bg-messengerBg h-[80px] rounded-[20px] px-5 drop-shadow-lg">
          <div className="flex items-center">
            <Image
              className="w-[48px] object-contain"
              src="/social/messenger.png"
              alt=" "
              width={100}
              height={100}
            />
            <div className="font-bold text-sm text-start">
              <p className="text-textDeep">Any Queries?</p>
              <p className="text-primeFade"> Ask on Live Chat</p>
            </div>
          </div>
        </button>
      </Link>
    </>
  );
};

export default Messenger;
