import BabyCareProducts from "@/app/(home)/BabyCareProducts";
import DermaCareProducts from "@/app/(home)/DermaCareProducts";
import Footer from "@/components/shared/Footer";
import Serving from "@/app/(home)/Serving";
import SexualWellnessProducts from "@/app/(home)/SexualWellnessProducts";
import Carousel from "@/app/(home)/Carousel";
import Category from "@/app/(home)/Category";
import FlashSale from "@/app/(home)/FlashSale";
import OrderBanner from "@/app/(home)/OrderBanner";
import Refer from "@/app/(home)/Refer";
import BrandSwiper from "@/app/(home)/BrandSwiper";
import HeroBottom from "@/app/(home)/HeroBottom";
import BestDeal from "@/app/(home)/BestDeal";
import NavSecondary from "@/components/shared/NavSecondary";
import MobileSearchbar from "@/app/(home)/MobileSearchbar";
import HeroBottomCarousel from "@/app/(home)/HeroBottomCarousel";

export default function Home() {
  return (
    <>
      <MobileSearchbar />
      <NavSecondary />
      <Carousel />
      <HeroBottom />
      <HeroBottomCarousel />
      <BestDeal />
      <FlashSale />
      <Category />
      <Refer />
      <OrderBanner />
      <BrandSwiper />
      <Serving />
      <SexualWellnessProducts />
      <DermaCareProducts />
      <BabyCareProducts />
      <Footer />
    </>
  );
}
