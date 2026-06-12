'use client';

import HeroSection from "./components/HeroSection/HeroSection";
import ActionBanner from "./components/ActionBanner/ActionBanner";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import AtelierBanner from "./components/AtelierBanner/AtelierBanner";
import DesignIdeology from "./components/DesignIdeology/DesignIdeology";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Provenance from "./components/Provenance/Provenance";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <AtelierBanner />
      <DesignIdeology />
      <Provenance />
      <PhotoGallery />
    </>
  );
}
