import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#fdf6ec] text-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-6">
        Discover Sacred Patterns
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Explore the rich heritage of Indian rangoli art through thousands of
        traditional and contemporary designs from across the subcontinent
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Kolam",
          "Mandana",
          "Rangoli",
          "Muggu",
          "Alpana",
        ].map((region, idx) => (
          <button
            key={idx}
            className="px-6 py-2 rounded-full bg-neutral-100 hover:bg-neutral-300 text-red-700 font-medium shadow-sm transition"
          >
            {region}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
