import React from "react";
import Hero from "../components/Explore/Hero";
import FeaturedCollections from "../components/Explore/FeaturedCollections";
import RegionalTreasures from "../components/Explore/RegionalTreasures";
import Gallery from "../components/Explore/Gallery";
import TrendingThisWeek from "../components/Explore/TrendingThisWeek";
import StoriesBehindTheArt from "../components/Explore/StoriesBehindTheArt";
import StayInspired from "../components/Explore/StayInspired";
import Footer from "../components/Footer";
import BentoGrid from "../components/Explore/BentoGrid";
import CircularGallery from "../components/LandingPage/CircularGallery";
import KolamStoryUploader from "../components/Explore/KolamStoryUploader";
import KolamGamesSection from "../components/Tutorial/KolamGamesSection";
import Navbar from "../components/NavBar";
const ExplorePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="min-h-screen bg-white text-black">
        <BentoGrid />
      </div>
      <KolamStoryUploader />
      <RegionalTreasures />
      <TrendingThisWeek />
      <KolamGamesSection/>
      <Footer />
      {/* Other components will go here */}
    </div>
  );
};

export default ExplorePage;
