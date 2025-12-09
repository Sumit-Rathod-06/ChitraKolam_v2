import React from "react";
import { FaBookOpen, FaHeart } from "react-icons/fa";

const stories = [
  {
    id: 1,
    icon: <FaBookOpen className="text-yellow-500 text-2xl" />,
    title: "The Sacred Geometry",
    subtitle: "Ancient Mathematical Wisdom",
    description: `Rangoli patterns are not merely decorative art forms but profound
      expressions of mathematical principles and spiritual beliefs. The geometric precision found in
      traditional kolam designs reflects the ancient Indian understanding of cosmic harmony and the
      interconnectedness of all existence.

      Each dot and line carries significance, representing the journey from the finite to the infinite,
      from the material to the spiritual realm.`,
  },
  {
    id: 2,
    icon: <FaHeart className="text-red-600 text-2xl" />,
    title: "Grandmother's Wisdom",
    subtitle: "Passed Through Generations",
    description: `In countless Indian households, the art of rangoli has been lovingly transmitted
      from grandmother to granddaughter, carrying with it not just artistic techniques but cultural values,
      spiritual practices, and community bonds.

      These morning rituals of creating floor art serve as meditation, prayer, and a celebration of life's
      beauty in its simplest form.`,
  },
];

const StoriesBehindTheArt = () => {
  return (
    <div className="px-15 py-10 bg-amber-50">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-red-800">
        Stories Behind the Art
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 max-w-2xl"
          >
            <div className="w-56 h-12 rounded-full flex items-center justify-center bg-orange-400 text-white text-xl">
              {story.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-red-800">{story.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{story.subtitle}</p>
              <p className="text-gray-700">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesBehindTheArt;