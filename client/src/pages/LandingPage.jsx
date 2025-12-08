import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroSection from "../components/LandingPage/HeroSection";
import AboutCard from "../components/LandingPage/AboutCart";
import TutorialsSection from "../components/LandingPage/TutorialsSection";
import KolamAnalysis from "../components/LandingPage/KolamAnalysis";
import CreateKolamSection from "../components/LandingPage/CreateKolamSection";
import CircularGallery from "../components/LandingPage/CircularGallery";
import MissionSection from "../components/LandingPage/MissionSection";

export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <MissionSection/> 
      <TutorialsSection />
      <KolamAnalysis />
      <CreateKolamSection />
      <div className="px-6 py-6 text-center mb-10">
        <p className="text-gray-700 text-md mb-5 text-2xl">
          Join thousands of artists and learners who are discovering the beauty
          of kolam art through{" "}
          <span className="font-semibold">Chitrakolam</span>.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="bg-[#C53030] text-white px-6 py-3 rounded-full text-md font-medium hover:bg-red-700 transition">
            Get Started Free
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-full text-md font-medium hover:bg-gray-100 transition">
            Explore Designs
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
