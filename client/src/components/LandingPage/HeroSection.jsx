import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";

export default function KolamHeroSection() {
  const columns = [
    // Far Left: Pushed way down
    { images: [img1, img6], className: "pt-40" },

    // Mid Left: Pushed slightly down
    { images: [img2, img7], className: "pt-12" },

    // Center: Pulled UP (Negative Margin) to be the highest peak
    { images: [img3, img8], className: "-mt-10" },

    // Mid Right: Pushed slightly down
    { images: [img4, img9], className: "pt-12" },

    // Far Right: Pushed way down
    { images: [img5, img10], className: "pt-40" },
  ];

  const getGlobalIndex = (colIndex, imgIndex) => {
    return colIndex * 2 + imgIndex;
  };

  return (
    <div className="py-24 bg-white flex flex-col items-center overflow-hidden">
      {/* Header Text */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight text-center">
        Discover, Create & Share Kolams
      </h1>

      <h2 className="text-center text-gray-600 text-lg max-w-3xl mb-24 leading-relaxed px-4">
        A creative world of traditional and modern kolam art — explore, learn,
        analyze, and design effortlessly.
      </h2>

      {/* RELATIVE WRAPPER: Allows us to position the button absolutely within this area */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Main Grid Layout */}
        <div className="flex flex-row justify-center gap-4 sm:gap-6">
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-6 w-1/5 ${col.className}`}
            >
              {col.images.map((src, imgIndex) => {
                const globalIndex = getGlobalIndex(colIndex, imgIndex);

                return (
                  <motion.div
                    key={globalIndex}
                    className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg bg-white"
                    animate={{
                      y: [0, -25, 0, 25, 0],
                      rotate: [-1.5, 1.5, -1.5],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: globalIndex * 0.15,
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 0,
                    }}
                  >
                    <img
                      src={src}
                      alt={`kolam-${globalIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* FLOATING BUTTON: 
          - absolute: Removes it from flow
          - bottom-20: Lifts it up into the empty space (Arch)
          - left-1/2 -translate-x-1/2: Perfectly centers it
        */}
        <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 px-8 py-3 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 text-gray-800 font-medium text-lg flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300">
          See more
          <span className="text-red-500 font-bold text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
