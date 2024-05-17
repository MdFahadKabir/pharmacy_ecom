import Image from "next/image";
import Link from "next/link";
const AccountsNav = () => {
  return (
    <>
      <div className=" border-gray-100 rounded-[10px] shadow-sm mt-28 h-full flex flex-col lg:hidden">
        <div className="flex items-center gap-3 p-4">
          <Image
            height={200}
            width={200}
            className="inline-block size-[46px] rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <div>
            <p className="font-medium text-base text-black">Selina Akhter</p>
            <p className="text-sm font-light text-gray-600 py-1">
              Emedi Wallet:{" "}
              <span className="text-cart font-bold text-sm">৳1050</span>
            </p>
            <Link
              href="/accounts/profile"
              className="text-sm font-semibold underline text-primeFade"
            >
              Visit Profile
            </Link>
          </div>
        </div>

        <div className="text-[#718096] font-light text-base mx-4 border border-gray-200 rounded-lg">
          <Link
            href="/accounts/notification"
            className="flex items-center gap-3 ps-7 py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG.png"
              className="w-6 h-6 object-contain "
            />
            <p>Notification</p>
          </Link>

          <Link
            href="/accounts/orders"
            className="flex items-center gap-3 ps-7 border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-1.png"
              className="w-6 h-6 object-contain "
            />

            <p>Orders</p>
          </Link>

          <Link
            href="/accounts/prescription"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-2.png"
              className="w-6 h-6 object-contain "
            />
            <p>Prescriptions</p>
          </Link>

          <Link
            href="/accounts/suggestProducts"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-3.png"
              className="w-6 h-6 object-contain "
            />
            <p>Suggest Products</p>
          </Link>

          <Link
            href="/accounts/wishlist"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-4.png"
              className="w-6 h-6 object-contain "
            />
            <p>Wishlist</p>
          </Link>

          <Link
            href="/accounts/manageAddress"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-5.png"
              className="w-6 h-6 object-contain "
            />
            <p>Manage Address</p>
          </Link>

          <Link
            href="/accounts/transactionHistory"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-6.png"
              className="w-6 h-6 object-contain "
            />
            <p>Transaction History</p>
          </Link>

          <Link
            href="/accounts/specialOffers"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-7.png"
              className="w-6 h-6 object-contain "
            />
            <p>Special Offers</p>
          </Link>

          <Link
            href="/accounts/refer"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-8.png"
              className="w-6 h-6 object-contain "
            />
            <p>Refer and Earn</p>
          </Link>
        </div>
        <Link
          href=""
          className=" text-gray-400 flex items-center gap-3 ps-7  py-2.5 hover:bg-secondary border-gray-100"
        >
          <p>Legal & Support</p>
        </Link>
        <div className="text-[#718096] font-light text-base mx-4 border border-gray-200 rounded-lg">
          <Link
            href="/accounts/terms"
            className="flex items-center gap-3 ps-7  py-2.5 hover:bg-secondary border-gray-300"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-9.png"
              className="w-6 h-6 object-contain "
            />
            <p>Terms & Conditions</p>
          </Link>

          <Link
            href="/accounts/privacy"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-10.png"
              className="w-6 h-6 object-contain "
            />
            <p>Privacy Policy</p>
          </Link>

          <Link
            href="/accounts/refund"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-11.png"
              className="w-6 h-6 object-contain "
            />
            <p>Return and Refund Policy</p>
          </Link>

          <Link
            href="/accounts/faq"
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-12.png"
              className="w-6 h-6 object-contain "
            />

            <p>FAQ</p>
          </Link>

          <Link
            href=""
            className="flex items-center gap-3 ps-7  border-t py-2.5 hover:bg-secondary border-gray-100 rounded-b-lg"
          >
            <Image
              height={200}
              width={200}
              alt=""
              src="/icons/SVG-13.png"
              className="w-6 h-6 object-contain "
            />

            <p>Log Out</p>
          </Link>

          {/* .. */}
        </div>
      </div>
    </>
  );
};

export default AccountsNav;
