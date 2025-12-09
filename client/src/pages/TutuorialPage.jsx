import React from "react";
import HeroSection from "../components/Tutorial/HeroSection";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedRangoli from "../components/Tutorial/FeaturedRangoli";
import KolamGamesSection from "../components/Tutorial/KolamGamesSection";
import KolamStylesSection from "../components/Tutorial/KolamStylesSection";

const TutuorialPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedRangoli />
      <KolamGamesSection />
      <KolamStylesSection />
      <Footer />
    </div>
  );
};

export default TutuorialPage;
