// BentoGrid.jsx
import React, { useState } from "react";
import KolamModal from "../KolamModal";

// Images imports
import iimg1 from "../../assets/iimg1.jpg";
import iimg2 from "../../assets/iimg2.jpg";
import iim3 from "../../assets/iim3.jpg";
import iimg4 from "../../assets/iimg4.png";
import iimg5 from "../../assets/iimg5.jpg";
import iimg6 from "../../assets/iimg6.jpg";
import iimg7 from "../../assets/iimg7.jpg";
import iimg8 from "../../assets/iimg8.jpg";
import iimg9 from "../../assets/iimg9.jpg";
// Assuming you have 8 images but need 9 slots, or reuse one as per your previous code
// If you have a 9th image, import it here.

const kolamData = [
  {
    id: 1,
    src: iimg1,
    className: "lg:col-span-2 lg:row-span-2",
    title: "Mandana (Geometric/Auspicious Chowk Pattern)",
    tags: ["Traditional", "Sacred", "Folk Art"],
    story:
      "Mandana, derived from the word Mandan (decoration), is an ancient tribal art, primarily practiced by Meena women, passed down from mother to daughter. It is a ritualistic painting drawn to purify the space, protect the home and hearth, and invoke or welcome the blessings of gods and goddesses. The creation process itself is considered a devotional and meditative practice.",
    details: {
      origin: "Rajasthan (especially the Hadoti area)",
      significance:
        "Symbolizes auspiciousness, good fortune, and protection of the household.",
      pattern: "Geometric and Symbolic",
      symmetry: "Bilateral",
      colors: "* White for motifs. * Red (Geru/Red Ochre) for background.",
      materials: ["Cow dung", "White chalk powder", "Red ochre"],
      festive:
        "Compulsively practiced during:  Diwali (Festival of Lights) , Navratri , Weddings and other life-cycle rituals",
    },
  },
  {
    id: 2,
    src: iimg2,
    className: "",
    title: "Mandana (Elephant Motif)",
    tags: ["Traditional", "Symbolic", "Folk Art"],
    story:
      "A form of the ancient Mandana tradition, this design is drawn specifically to honor animals that are considered auspicious and sacred within the community. It is a ritualistic floor painting, passed down through generations, serving as a vibrant expression of devotion and folk culture.",
    details: {
      origin: "Rajasthan (often seen in rural and tribal art)",
      significance: "Strength, prosperity, good luck, and royalty",
      pattern: "Figurative and Geometric",
      symmetry: "Bilateral and Patterned",
      colors: "White, Red, Geru, Ochre",
      materials: ["Rice", "Cow dung", "Clay", "White chalk powder", "lime"],
      festive: "Diwali, weddings, and other major festivals, as the elephant motif is universally auspicious.",
    },
  },
  {
    id: 3,
    src: iim3,
    className: "",
    title: "Alpana (Intricate Geometric Chowk / Square Diagram)",
    tags: ["Geometry", "Ritualistic", "Monochromatic"],
    story:
      "This elaborate geometric diagram is drawn to define and sanctify a central square space (Chowk) for major religious ceremonies. The complex, symmetrical pattern serves as a potent diagram to stabilize and purify the environment, ensuring the efficacy of the rituals performed there.",
    details: {
      origin: "West Bengal (The Pithuli/Alpana tradition)",
      significance: "Symbolizes order and cosmic stability. ",
      pattern: "Highly Structured Geometric",
      symmetry: "Quadrilateral",
      colors: "White",
      materials: ["Sun-dried rice flour (Pithuli)", "Water", "Cotton swabs"],
      festive: "Mandatory during major religious and familial events. Prominently featured during: Durga Puja and Saraswati Puja, Lakshmi Puja and Weddings.",
    },
  },
  {
    id: 4,
    src: iimg4,
    className: "lg:col-span-2 lg:row-span-2",
    title: "Concentric Petal Mandala Kolam with Spiral Ornaments",
    tags: ["Mandala Style", "Spiral Motifs", "Decorative"],
    story:
      "This kolam expresses the idea of cyclic prosperity. The layered petals expand outward like a blooming flower, symbolising growth and renewal. The outer spirals indicate continuity and protection, a common Tamil household intention during morning kolam drawing. The central star-like petal structure indicates balance and purity.",
    details: {
      origin: "Tamil Nadu",
      significance: "Represents auspicious beginnings, protection of the threshold, and invoking abundance at dawn.",
      pattern: "Mandala Kolam with layered petals, inner star geometry, spiral extensions on perimeter; minimal to no dot-grid reliance.",
      symmetry: "Radial",
      colors: "Predominantly white with yellow-red central bindu highlights.",
      materials: ["Rice flour", "Kolam powder", "Haldi (Turmeric)", "Kumkum"],
      festive: "Used for daily morning kolams, Fridays (Lakshmi day), and small celebrations or welcoming guests.",
    },
  },
  {
    id: 5,
    src: iimg5,
    className: "",
    title: "Grand Circular Lattice Kolam with Red-White Radiant Mandala",
    tags: ["Lattice Pattern", "Circular", "Mandala Style"],
    story:
      "A majestic kolam featuring a highly detailed circular lattice symbolizing infinite cosmic expansion. The red-white inner mandala resembles a spinning chakra, representing energy, protection, and divine presence. Such grand kolams are traditionally drawn during temple festivals and major house celebrations, reflecting abundance and devotion.",
    details: {
      origin: "Tamil Nadu",
      significance: "Represents cosmic harmony, purity, and spiritual elevation. It is a classic Tamil ritual mapping of Shakti (red) and purity (white).",
      pattern: "Mandala-style kolam with concentric rings: inner petal rotation, mid-layer red teardrop motifs, outer dense lattice mesh.",
      symmetry: "Circular Radial ",
      colors: "White base with red infill in inner motifs; center bindu in yellow/red.",
      materials: ["Rice flour", "White kolam powder", "Red kaavi powder", "Fine mesh application"],
      festive: "Used in temple festivals, Tamil New Year, Pongal Kolam Competitions, and special auspicious ceremonies.",
    },
  },
  {
    id: 6,
    src: iimg6,
    className: "lg:row-span-2",
    title: "Peacock Petal Ring Muggu with Spiral Mandala Core",
    tags: ["Circular", "Floral", "Symmetric"],
    story:
      "Bold peacock-like petals and a spiral mandala narrate joy, celebration, and welcoming auspiciousness.",
    details: {
      origin: "Andhra Pradesh",
      significance: "Elegance and festive positivity",
      pattern: "Central spiral mandala → leafy ring → large stylized peacock petal motifs.",
      symmetry: "8-Fold Radial",
      colors: "Red, blue, green, yellow, white",
      materials: ["Rice flour outlines", "Coloured powders"],
      festive: "Ugadi, Sankranti, housewarming, seasonal celebrations",
    },
  },
  {
    id: 7,
    src: iimg7,
    className: "",
    title: "Gahuli Nandavrat (Rice Grain Rangoli)",
    tags: ["Jain Rangoli", "Rice Grain Art", "Gahuli"],
    story:
      "This rangoli is a classic Gahuli (Jain style) made entirely from rice grains forming a complex Nandavrat maze. The labyrinthine layout represents the inward journey of the soul and protection of auspicious energy. The rice grains symbolize purity and non-violence — core Jain values.",
    details: {
      origin: "Gujarat (Jain community)",
      significance: "Considered highly sacred; symbolizes purity, discipline, and inner enlightenment.",
      pattern: "Intricate maze-like Nandavrat; freehand placement of rice grains forming geometric spirals.",
      symmetry: "Four-way symmetry with repetitive spiral patterns",
      colors: "Natural white (rice grain tone).",
      materials: ["Unbroken rice grains carefully arranged"],
      festive: "Used during Jain Paryushan, Pratikraman rituals, and temple offerings.",
    },
  },
  {
    id: 8,
    src: iimg8,
    className: "",
    title: "Diya-centered Mandala with Shubh Symbols",
    tags: ["Mandala", "Traditional", "Festive"],
    story:
      "A multi-layered mandala featuring circular petal clusters with swastik marks indicating Shubh / auspicious blessings. The diya in the centre activates the rangoli symbolically as a seat for Lakshmi. Leaf rings and wave borders represent protection and abundance.",
    details: {
      origin: "Southern Maharashtra (Solapur–Satara belts)",
      significance: "Maharashtra's traditional festival rangoli with auspicious symbols",
      pattern: "Circular mandala; layered motifs; leaf borders; swirl fillers",
      symmetry: "Radial",
      colors: "Red, Blue, Yellow, Green, Orange, White",
      materials: ["Coloured rangoli powders", "Central diya"],
      festive: "Especially for Lakshmi Poojan, Diwali Padwa, and Tulsi rituals",
    },
  },
  {
    id: 9,
    src: iimg9, // Reusing img8 or add img9
    className: "",
    title: "Festival Star Cluster Muggu",
    tags: ["Geometric", " Multi-colour", "Symmetric"],
    story:
      "A radiant cluster of stars expressing joy, brightness, and celebration, with diamond fillers evoking sparkling festivity.",
    details: {
      origin: "Andhra Pradesh",
      significance: "Drawn to celebrate joyous occasions and symbolize hope and festive spirit.",
      pattern: "Large central star surrounded by multiple smaller stars and diamond fillers.",
      symmetry: "Geometric Rotational",
      colors: "Purple, Yellow, Blue, Teal, Magenta, White",
      materials: ["Rangoli powders", "Rice-flour outlines"],
      festive: "Ugadi, Sankranti, competitions, festive entrances",
    },
  },
];

const BentoGrid = () => {
  const [selectedKolam, setSelectedKolam] = useState(null);

  const handleClose = () => {
    setSelectedKolam(null);
  };

  return (
    <div className="w-full py-10 bg-[#fdf6ec]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px]">
          {kolamData.map((kolam, i) => (
            <div
              key={kolam.id}
              onClick={() => setSelectedKolam(kolam)}
              className={`relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40 shadow-md group cursor-pointer ${kolam.className}`}
            >
              <img
                src={kolam.src}
                alt={kolam.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Optional: Show title on hover inside the grid */}
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-sm drop-shadow-md">
                  {kolam.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <KolamModal
        isOpen={!!selectedKolam}
        onClose={handleClose}
        data={selectedKolam}
      />
    </div>
  );
};

export default BentoGrid;
