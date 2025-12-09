import React, { useState } from "react";
// Import Lucide React icons
import { Heart, X, Play, Download, Share2, MapPin, Star, Palette, Maximize2, GitBranch } from "lucide-react";

// --- UPDATED allPatterns DATA STRUCTURE ---
const allPatterns = [
  {
    region: "Tamil Nadu",
    title: "Traditional Lotus Rangoli",
    description:
      "A sacred symbol in Hindu culture, the lotus represents purity, enlightenment, and rebirth. This intricate pattern is traditionally drawn during Diwali celebrations.",
    // NEW DETAILED FIELD
    detailedDescription: "The Traditional Lotus Rangoli, or 'Thamarai Kolam,' is central to South Indian ritual art. Drawn with wet rice flour or dry powders, its 8-fold radial symmetry symbolizes the eight directions and the full bloom of consciousness. It’s primarily used for major festivals like Diwali and Pongal to invite the Goddess Lakshmi and symbolize purity in the home.",
    image: "https://rahulrangoli.com/wp-content/uploads/2025/04/Blog-8.webp", 
    details: {
      origin: "Tamil Nadu, South India",
      significance: "Symbol of divine beauty and purity",
      design: "Concentric petals with geometric precision",
      symmetry: "8-fold radial symmetry",
      dotStructure: "13×13 dot grid foundation",
      colors: "White rice flour, red vermillion",
    },
  },
  {
    region: "Rajasthan",
    title: "Royal Peacock Mandana",
    description: "A freehand Mandana pattern celebrating nature's beauty and the royal heritage of Rajasthan.",
    // NEW DETAILED FIELD
    detailedDescription: "Mandana art from Rajasthan and Madhya Pradesh is a freehand style often applied to floors and walls with a paste of chalk and cow dung. The Royal Peacock motif is especially prominent, symbolizing grace, beauty, and good fortune, often drawn during weddings and major festivals like Teej and Gangaur. It typically features vibrant blues, greens, and yellows.",
    image: "https://i.ytimg.com/vi/AnGQdXJ-9wY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnivV3H7vvXF8lTdHuv8q9xH8LdA",
    details: {
      origin: "Rajasthan",
      significance: "Symbol of grace and celebration",
      design: "Peacock feathers with floral elements",
      symmetry: "Radial peacock symmetry",
      dotStructure: "Freehand style",
      colors: "Bright blues, greens, yellows",
    },
  },
  {
    region: "West Bengal",
    title: "Shankha Alpana",
    description: "A traditional Alpana art featuring the sacred conch shell motif for blessings and auspiciousness.",
    // NEW DETAILED FIELD
    detailedDescription: "Alpana is the folk art of West Bengal, traditionally created by women using a paste of rice flour (*pitholi*). The *Shankha* (conch shell) motif is an essential part of Bengali rituals, particularly during Durga Puja and Lakshmi Puja. The design is fluid and freehand, based on curved lines and spirals, representing the sound of the 'Om' and the auspicious beginning of all things.",
    image: "https://i.ytimg.com/vi/HTLoz7OtFlk/maxresdefault.jpg", 
    details: {
      origin: "West Bengal",
      significance: "Sacred conch for auspiciousness",
      design: "Curved conch-like spiral",
      symmetry: "Circular spiral symmetry",
      dotStructure: "Freehand without dots",
      colors: "White rice paste",
    },
  },
  {
    region: "Kerala",
    title: "Pookalam (Floral Rangoli)",
    description:
      "An elaborate arrangement of natural flowers and petals, traditionally created during the harvest festival of Onam to welcome the mythical King Mahabali.",
    // NEW DETAILED FIELD
    detailedDescription: "Pookalam, meaning 'Flower Carpet,' is a temporary floral art form unique to Kerala and a central element of the Onam festival. It is made of various natural flowers, petals, and leaves, arranged in concentric, symmetrical layers. The size and complexity increase over the ten days of Onam, symbolizing the grandeur of the legendary King Mahabali's visit and the spirit of harvest and unity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xBq-Ymu69V-HMx7skRtf3pAYcsCUrhFtlQ&s", 
    details: {
      origin: "Kerala, South India",
      significance: "Welcoming King Mahabali, harvest festival",
      design: "Layered concentric circles of different flowers",
      symmetry: "Perfect radial symmetry",
      dotStructure: "Made purely with flowers/petals (no dots)",
      colors: "Natural flower colors (yellow, red, purple)",
    },
  },
  {
    region: "Maharashtra",
    title: "Dotted Kolam (Chukki Rangoli)",
    description:
      "A geometric pattern drawn by connecting dots (known as *chukkis*) with lines, forming intricate symmetrical designs. Popular for everyday decoration.",
    // NEW DETAILED FIELD
    detailedDescription: "Popular across Maharashtra and parts of South India (where it's also called Kolam), the Dotted Kolam is based on a structured grid (*chukkis*). Lines are drawn around the dots, or between them, to create complex, interwoven geometric and curvilinear designs. This daily ritual is believed to ward off evil spirits and welcome good luck. The complexity ranges from simple 5x5 grids to highly elaborate, large-scale designs.",
    image: "https://cfw51.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoibXltYW5kYXAuaW4iLCJ2IjozNTA3MDAwMTg5LCJyIjoxLCJpIjoiZGZjYjgwNjMtMmQ0Zi00YzVkLWY5NTgtNzkyN2ZiMDdkZjAwIn0/wp-content/uploads/2022/05/White-Rangoli-Design.jpg",
    details: {
      origin: "Maharashtra / South India",
      significance: "Bringing good luck and daily blessings",
      design: "Curved lines drawn around a grid of dots",
      symmetry: "Rotational and mirror symmetry",
      dotStructure: "Grid of 5x5, 7x7, 9x9, or more dots",
      colors: "Fine coloured powder, white rice powder",
    },
  },
  {
    region: "Gujarat",
    title: "Swastik Rangoli",
    description:
      "Features the Swastik symbol, an ancient motif representing peace, good fortune, and prosperity, often drawn at the entrance during festivals like Diwali.",
    // NEW DETAILED FIELD
    detailedDescription: "In Gujarati culture, the Rangoli often prominently features the sacred **Swastik** symbol, a sign of prosperity and auspiciousness in Hinduism. The main symbol is usually surrounded by *deepas* (lamps), floral elements, and *kalash* (pots) to enhance the celebratory mood. It is a vital part of the five-day Diwali festival and is traditionally made with bright, contrasting colored powders to signify joy and energy.",
    image: "https://i.pinimg.com/736x/1a/e1/3e/1ae13e203b4bf73c0f2a24e3a8378645.jpg", 
    details: {
      origin: "Gujarat",
      significance: "Symbol of prosperity and auspiciousness",
      design: "Central Swastik with surrounding geometric or floral patterns",
      symmetry: "4-fold rotational symmetry",
      dotStructure: "Can be freehand or dot-based",
      colors: "Vibrant and contrasting powders",
    },
  },
  {
    region: "Odisha",
    title: "Jhoti Chita",
    description:
      "Ritualistic floor and wall art, primarily made during special occasions like Lakshmi Puja. It often depicts scenes, animals, and traditional elements.",
    // NEW DETAILED FIELD
    detailedDescription: "Jhoti Chita is a form of spontaneous, ritualistic painting from Odisha, where the art is made not just on the floor but also on the walls and doorways. It is created using 'pithau' (a paste of ground rice) and features free-flowing lines, depicting traditional scenes, flora, fauna, and religious figures like elephants and Goddess Lakshmi's feet. It is an act of devotion, particularly during festivals dedicated to the Goddess of wealth.",
    image: "https://i.ytimg.com/vi/C3xbckK3YSo/sddefault.jpg", 
    details: {
      origin: "Odisha, East India",
      significance: "Worship of Goddess Lakshmi for wealth",
      design: "Free-flowing lines depicting flora, fauna, and religious figures",
      symmetry: "Generally freehand (less strict symmetry)",
      dotStructure: "Freehand with finger-painting technique",
      colors: "White rice paste (pithau)",
    },
  },
  {
    region: "Uttar Pradesh",
    title: "Chowkpurana",
    description:
      "Geometric patterns drawn near the place of worship for ceremonial occasions, specifically the four-armed square design.",
    // NEW DETAILED FIELD
    detailedDescription: "Chowkpurana is a ceremonial folk art from North India, including Uttar Pradesh. The name itself suggests 'filling the square,' and it is characterized by rigid, square or rectangular geometric forms. It is typically drawn at the site of a *puja* (worship ceremony) using dry flour, turmeric (*haldi*), and vermillion (*kumkum*) to sanctify the space and invoke deities. The designs are believed to bring good fortune and purity.",
    image: "https://www.shutterstock.com/image-vector/diwali-rangoli-design-traditional-indian-600nw-1615980406.jpg", 
    details: {
      origin: "Uttar Pradesh / North India",
      significance: "To sanctify and purify a space for puja",
      design: "Square or rectangular pattern composed of geometric shapes",
      symmetry: "4-fold symmetry (square-based)",
      dotStructure: "Grid-based or freehand geometric drawing",
      colors: "Dry flour and powdered colours (haldi, kumkum)",
    },
  },
  {
    region: "Andhra Pradesh",
    title: "Muggu (Dotted Kolam Variation)",
    description:
      "Similar to Kolam, this is an art of drawing lines on a grid of dots, mostly using white powder, and is a daily ritual at the entrance of homes.",
    // NEW DETAILED FIELD
    detailedDescription: "Muggu is the Telugu name for the daily ritual floor art of Andhra Pradesh and Telangana. It is essentially a Kolam or Rangoli design based on a grid of dots (*chukkalu*) around which intricate lines are drawn. Traditionally made at dawn with white chalk or rice flour, it signifies a daily spiritual cleaning. While often purely geometric, it sometimes incorporates seasonal floral or symbolic motifs.",
    image: "https://www.shutterstock.com/image-vector/traditional-kolam-designs-south-indian-260nw-2490254739.jpg",
    details: {
      origin: "Andhra Pradesh / Telangana",
      significance: "Daily spiritual cleaning and greeting",
      design: "Intricate geometric and floral designs linking dots",
      symmetry: "Dot-grid based symmetry",
      dotStructure: "Dots (known as *chukkalu*) are the foundation",
      colors: "White chalk/rice flour, sometimes accented with color",
    },
  },
];
// --- END UPDATED DATA STRUCTURE ---

const Gallery = () => {
  const [visible, setVisible] = useState(6);
  const [selected, setSelected] = useState(null);

  // Function to handle load more
  const handleLoadMore = () => {
    setVisible((prev) => Math.min(prev + 3, allPatterns.length)); // Load 3 more at a time
  };

  return (
    <section className="w-full bg-[#fdf6ec] py-12 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center text-red-800 mb-10">
        Explore Our Rangoli Gallery
      </h2>
      
      {/* Gallery Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPatterns.slice(0, visible).map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover border-b-4 border-red-200"
            />
            <div className="p-5">
              <span className="inline-block text-xs px-3 py-1 bg-red-100 text-red-700 font-semibold rounded-full mb-2">
                {item.region}
              </span>
              <h3 className="text-xl font-bold text-red-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
              <button className="text-gray-500 hover:text-red-600">
                <Heart className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < allPatterns.length && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-red-700 text-white rounded-full font-semibold shadow-md hover:bg-red-800 transition duration-300 transform hover:scale-105"
          >
            Load More Patterns ({allPatterns.length - visible} remaining)
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          {/* Increased max-w to 5xl for more space */}
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-8 relative animate-in zoom-in-95 duration-300">
            {/* Close button using Lucide icon */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700 transition"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Image */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-extrabold text-red-800 mb-4">
                  {selected.title}
                </h2>
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl mb-4"
                />
                  {/* Detailed Explanation - ***UPDATED TO USE detailedDescription*** */}
                <div className="mt-4 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-red-700 mb-2">Detailed Explanation</h3>
                    <p className="text-gray-700 text-base">{selected.detailedDescription}</p> 
                </div>
              </div>

              {/* Right: Details & Metadata */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                  Metadata & Design Blueprint
                </h3>
                

                <div className="space-y-4 text-sm">
                  <DetailBox icon={MapPin} label="Origin" value={selected.details.origin} />
                  <DetailBox icon={Star} label="Cultural Significance" value={selected.details.significance} />
                  <DetailBox icon={Maximize2} label="Design Pattern" value={selected.details.design} />
                  <DetailBox icon={GitBranch} label="Symmetry" value={selected.details.symmetry} />
                  <DetailBox icon={Palette} label="Traditional Colors" value={selected.details.colors} />
                  <DetailBox icon={Maximize2} label="Dot Structure" value={selected.details.dotStructure} />
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                    <Play className="w-4 h-4" /> <span>Learn to Draw</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition">
                    <Download className="w-4 h-4" /> <span>Download Template</span>
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 transition">
                    <Share2 className="w-4 h-4" /> <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Helper component for cleaner detail boxes
const DetailBox = ({ icon: Icon, label, value }) => (
    <div className="p-3 bg-gray-100 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
        <Icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
            <strong className="text-gray-800 block">{label}</strong>
            <p className="text-gray-600 text-xs mt-0.5">{value}</p>
        </div>
    </div>
);


export default Gallery;