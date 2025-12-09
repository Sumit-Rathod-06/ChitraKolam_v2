import React from "react";

const collections = [
  {
    title: "Tamil Kolam Classics",
    description:
      "Sacred geometric patterns from Tamil Nadu featuring traditional dot-based designs",
    patterns: 248,
    image: "https://i.ytimg.com/vi/IvdX4rS5Bwk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALxfiJRvsbIiTXKam2j94F5RRG5w", // replace with actual image link
  },
  {
    title: "Rajasthani Mandana",
    description:
      "Vibrant wall art traditions from the royal state of Rajasthan",
    patterns: 186,
    image: "https://www.artsindia.com/cdn/shop/articles/Mandana_Art.png?v=1678420266", // replace with actual image link
  },
  {
    title: "Bengali Alpana",
    description:
      "Elegant rice paste designs celebrating Bengali cultural heritage",
    patterns: 142,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56ADpSeGWydY01_R0rCpCyId34FSMb9FPvg&s", // replace with actual image link
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 px-6 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-10">
        Featured Collections
      </h2>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {collections.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span>{item.patterns} patterns</span>
                <span className="text-red-700 font-bold text-lg">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
