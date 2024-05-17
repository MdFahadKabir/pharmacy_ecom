import SideNav from "@/components/shared/SideNav";
import Messenger from "./Messenger";
export default function RootLayout({ children }) {
  return (
    <>
      <div className="relative pt-[100px] lg:block hidden">
        <div className="lg:fixed w-[18%] min-h-screen inset-0">
          <SideNav />
        </div>
        <div className="w-[82%] ml-auto z-50">{children}</div>
      </div>

      <div className="lg:block hidden">
        <div className="float fixed z-50 align-middle items-center -right-[13px] bottom-24 ">
          <Messenger />
        </div>
      </div>
      <div className="lg:hidden block">{children}</div>
    </>
  );
}
