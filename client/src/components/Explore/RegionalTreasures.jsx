import React, { useState } from "react";
import CircularGallery from "../LandingPage/CircularGallery";
import rangoli1 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli1.jpg";
import rangoli2 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli2.jpg";
import rangoli3 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli3.jpg";
import rangoli4 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli4.jpg";
import rangoli5 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli5.jpg";
import rangoli6 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Rangoli/Rangoli/rangoli6.jpg";

import Kolam1 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam1.jpg";
import Kolam2 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam2.jpg";
import Kolam3 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam3.jpg";
import Kolam4 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam4.jpg";
import Kolam5 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam5.jpg";
import Kolam6 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Kolam/Kolam/Kolam6.jpg";

import muggu1 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu1.jpg";
import muggu2 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu2.jpg";
import muggu3 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu3.jpg";
import muggu4 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu4.jpg";
import muggu5 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu5.jpg";
import muggu6 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu6.jpg";
import muggu7 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Muggu/Muggu/muggu7.jpg";

import mandana1 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of images (1).jpg";
import mandana2 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of images (2).jpg";
import mandana3 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of images.jpg";
import mandana4 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of Lakshmi pada mandana.jpg";
import mandana5 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of Lakshmi paglya mandana.jpg";
import mandana6 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Mandana/Mandana/Copy of Mandana design (1).jpg";

import alpana1 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana1.jpg";
import alpana2 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana2.jpg";
import alpana3 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana3.jpg";
import alpana4 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana4.jpg";
import alpana5 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana5.jpg";
import alpana6 from "C:/Users/MAYUR RAONANG/OneDrive/Desktop/Dikshant/ChitraKolam_v2/client/src/assets/Alpana/Alpana/Alpana6.jpg";
// 1. Define your data source
// In a real app, this might come from an API.
// Using placeholder images for demonstration.
const kolamData = {
  TN: [
    {
      image: Kolam1,
      text: "",
    },
    {
      image: Kolam2,
      text: "",
    },
    {
      image: Kolam3,
      text: "",
    },
    {
      image: Kolam4,
      text: "",
    },
    {
      image: Kolam5,
      text: "",
    },
    {
      image: Kolam6,
      text: "",
    },
  ],
  RJ: [
    {
      image:
        mandana1,
      text: "",
    },
    {
      image:
        mandana2,
      text: "",
    },
    {
      image:
        mandana3,
      text: "",
    },
    {
      image:
        mandana4,
      text: "",
    },
    {
      image:
        mandana5,
      text: "",
    },
    {
      image:
        mandana6,
      text: "",
    },
  ],
  MH: [
    {
      image: rangoli1,
      text: "",
    },
    {
      image: rangoli2,
      text: "",
    },
    {
      image: rangoli3,
      text: "",
    },
    {
      image: rangoli4,
      text: "",
    },
    {
      image: rangoli5,
      text: "",
    },
    {
      image: rangoli6,
      text: "",
    },
  ],
  AP: [
    {
      image: muggu1,
      text: "",
    },
    {
      image: muggu2,
      text: "",
    },
    {
      image: muggu3,
      text: "",
    },
    {
      image: muggu4,
      text: "",
    },
    {
      image: muggu7,
      text: "",
    },
    {
      image: muggu6,
      text: "",
    },
  ],
  WB: [
    {
      image: alpana1,
      text: "",
    },
    {
      image: alpana2,
      text: "",
    },
    {
      image: alpana3,
      text: "",
    },
    {
      image: alpana4,
      text: "",
    },
    {
      image: alpana5,
      text: "",
    },
    {
      image: alpana6,
      text: "",
    },

  ],
};

const regions = [
  { code: "TN", name: "Tamil Nadu", designs: 324 },
  { code: "RJ", name: "Rajasthan", designs: 298 },
  { code: "MH", name: "Maharashtra", designs: 234 },
  { code: "AP", name: "Andhra Pradesh", designs: 178 },
  { code: "WB", name: "West Bengal", designs: 156 },
];

const RegionalTreasures = () => {
  const [activeRegion, setActiveRegion] = useState("TN");

  return (
    <section className="bg-red-800 text-white py-20 px-4 md:px-20 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Regional Treasures
        </h2>
        <a
          href="#"
          className="text-yellow-600 font-medium hover:underline text-sm md:text-base"
        >
          View All Regions →
        </a>
      </div>

      {/* Region Circles */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-12 mb-1">
        {regions.map((region, idx) => {
          const isActive = activeRegion === region.code;
          return (
            <div
              key={idx}
              className="text-center group cursor-pointer"
              onClick={() => setActiveRegion(region.code)}
            >
              <div
                className={`
                  w-20 h-20 md:w-24 md:h-24 rounded-full 
                  flex items-center justify-center text-lg md:text-xl mb-3 shadow-md 
                  transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "bg-white text-red-900 border-4 border-yellow-500 scale-110"
                      : "bg-yellow-600 text-red-900 group-hover:bg-yellow-400 group-hover:scale-105"
                  }
                `}
              >
                <span className="font-semibold">{region.code}</span>
              </div>
              <h3
                className={`font-medium transition-colors ${
                  isActive ? "text-yellow-400" : "text-white"
                }`}
              >
                {region.name}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Circular Gallery Display */}
      <div className="w-full h-[550px] relative mt-2 pt-10">
        <h3 className="text-center text-2xl font-bold mb-1 text-yellow-500 tracking-wider uppercase">
          {regions.find((r) => r.code === activeRegion)?.name} Collection
        </h3>

        {/* Pass the specific array for the active region */}
        <CircularGallery
          items={kolamData[activeRegion] || kolamData["TN"]}
          bend={0.1}
          textColor="#ffffff"
          borderRadius={0.05}
        />
      </div>
    </section>
  );
};

export default RegionalTreasures;
