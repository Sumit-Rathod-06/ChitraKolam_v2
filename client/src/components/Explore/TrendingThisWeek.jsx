import React from "react";
import { Heart } from "lucide-react";
const trendingData = [
  {
    id: 1,
    title: "Modern Fusion Kolam",
    subtitle: "Contemporary meets traditional",
    likes: "2.4k",
    image: "https://i.pinimg.com/736x/54/3f/71/543f71ffece5f94011b2d7d6d9bce5b8.jpg", // replace with actual image link
  },
  {
    id: 2,
    title: "Minimalist Mandala",
    subtitle: "Less is more philosophy",
    likes: "1.8k",
    image: "https://png.pngtree.com/png-clipart/20210321/original/pngtree-simple-islamic-mandala-ornament-vector-png-image_6123504.jpg",
  },
  {
    id: 3,
    title: "3D Optical Illusion",
    subtitle: "Mind-bending artistry",
    likes: "1.5k",
    image: "https://i.pinimg.com/236x/72/de/8f/72de8f0fdfa6f3dc1a72038743342b9f.jpg",
  },
  {
    id: 4,
    title: "Eco-Friendly Design",
    subtitle: "Sustainable art practices",
    likes: "1.2k",
    image: "https://i.pinimg.com/736x/07/9a/31/079a31687a7d8fd415cafebcfe35f86a.jpg",
  },
];

const TrendingThisWeek = () => {
  return (
    <div className="bg-[#fdf6ec] py-16 px-6 text-center ">
      <h2 className="text-3xl md:text-4xl font-extrabold text-red-800">
        Trending This Week
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        Discover what's popular in the kolam community right now
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {trendingData.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <p className="text-sm text-gray-500 mb-1">
                Trending #{index + 1}
              </p>
              <h3 className="text-lg font-bold text-red-700">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1 mb-2">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingThisWeek;
