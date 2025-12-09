import { useState } from "react";

export default function KolamStylesSection() {
  const cards = [
    {
      title: "Kolam",
      color: "from-red-600 to-red-500",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/mandala.png",
      desc: "Traditional South Indian floor art created with rice powder, featuring intricate geometric patterns drawn around dots.",
    },
    {
      title: "Muggu",
      color: "from-teal-700 to-green-500",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/circled.png",
      desc: "Andhra Pradesh’s vibrant floor art tradition, often colorful and featuring bold, flowing patterns that symbolize prosperity.",
    },
    {
      title: "Mandana",
      color: "from-red-600 to-orange-500",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/stop--v1.png",
      desc: "Rajasthani wall and floor art with geometric patterns, traditionally created during festivals and special occasions.",
    },
    {
      title: "Alpana",
      color: "from-blue-700 to-blue-500",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/leaf.png",
      desc: "Bengali floor art using rice paste, featuring organic motifs like lotus flowers, fish, and nature-inspired designs.",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (i) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Discover Kolam Styles Across Cultures
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-12">
        Click to explore different traditional floor art forms
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full h-80 cursor-pointer perspective"
            onClick={() => handleFlip(i)}
          >
            {/* Inner flip container */}
            <div
              className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
                flippedIndex === i ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div
                className={`absolute inset-0 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-white bg-gradient-to-br ${card.color} backface-hidden`}
              >
                <img src={card.icon} alt="" className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rounded-2xl shadow-xl p-6 bg-white text-gray-700 rotate-y-180 backface-hidden flex items-center text-center">
                <p className="text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
