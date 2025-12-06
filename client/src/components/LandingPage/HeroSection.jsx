import React from "react";
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
  const images = [
    img1,
    img2,
    img3,
    img4, 
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  return (
    <div className="py-20 bg-white flex flex-col items-center">

      {/* Top Text */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
           Discover, Create & Share Kolams
         </h1>
      <h2 className="text-center text-gray-600 text-lg max-w-3xl mb-12 leading-relaxed">
        A creative world of traditional and modern kolam art — explore, learn, analyze,
        and design effortlessly.
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto px-4">

        {images.map((img, index) => (
          <div
            key={index}
            className={`
              w-full h-56 rounded-xl overflow-hidden shadow-lg bg-gray-200 
              ${index % 5 === 1 || index % 5 === 3 ? "mt-10" : ""} 
              transition hover:scale-105
            `}
          >
            <img
              src={img}
              alt="kolam"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-16 px-8 py-3 rounded-full bg-white shadow-xl border text-gray-700 text-lg flex items-center gap-2 hover:bg-gray-50 transition">
        See more <span className="text-red-500 text-xl">→</span>
      </button>
    </div>
  );
}
