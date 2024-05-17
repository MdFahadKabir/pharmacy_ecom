import SideNav from "@/components/shared/SideNav";
export default function RootLayout({ children }) {
  return (
    <>
      <div className="relative lg:block hidden">
        <div className="lg:fixed w-[18%] min-h-screen inset-0">
          <SideNav />
        </div>
        <div className="w-[82%] ml-auto z-50">{children}</div>
      </div>

      <div className="lg:hidden block">{children}</div>
    </>
  );
}
