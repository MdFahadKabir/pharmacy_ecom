import "./globals.css";
import SideNav from "../components/shared/SideNav";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import NavbarMobile from "@/components/shared/NavbarMobile";
import { FaFacebookMessenger } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Navbar />
        <div className="lg:mb-0 mb-28"> {children}</div>

        <div className="lg:invisible block">
          <Link
            href=""
            className="float fixed z-50 align-middle items-center -right-[13px] bottom-24 "
            target="_blank"
          >
            <Image
              width={500}
              height={500}
              alt=""
              className="w-[100px]"
              src="/messenger.png"
            />
          </Link>
        </div>
        <NavbarMobile />
      </body>
    </html>
  );
}
