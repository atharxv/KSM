import HeroSection from "./components/HeroSection/HeroSection";
import ActionBanner from "./components/ActionBanner/ActionBanner";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import BestSeller from "./components/BestSeller/BestSeller";
import DesignIdeology from "./components/DesignIdeology/DesignIdeology";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ActionBanner />
      <FeaturedCollection />
      <BestSeller />
      <DesignIdeology />
      <PhotoGallery />
    </>
  );
}
