import HeroSection from "./components/HeroSection/HeroSection";
import ActionBanner from "./components/ActionBanner/ActionBanner";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import DesignIdeology from "./components/DesignIdeology/DesignIdeology";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ActionBanner />
      <FeaturedCollection />
      <DesignIdeology />
      <PhotoGallery />
    </>
  );
}
