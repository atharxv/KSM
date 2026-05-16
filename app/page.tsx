'use client';

import { useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import ActionBanner from "./components/ActionBanner/ActionBanner";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import AtelierBanner from "./components/AtelierBanner/AtelierBanner";
import DesignIdeology from "./components/DesignIdeology/DesignIdeology";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

import MobileStackWrapper from "./components/MobileStackWrapper/MobileStackWrapper";

export default function Home() {
  useEffect(() => {
    // Enable scroll snapping only for the homepage
    document.documentElement.classList.add('snap-active');
    return () => {
      document.documentElement.classList.remove('snap-active');
    };
  }, []);

  return (
    <>
      <HeroSection />
      <MobileStackWrapper>
        <FeaturedCollection />
        <AtelierBanner />
        <DesignIdeology />
        <PhotoGallery />
      </MobileStackWrapper>
    </>
  );
}
