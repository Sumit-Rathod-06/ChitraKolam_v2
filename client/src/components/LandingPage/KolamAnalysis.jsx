import React from "react";
import analysed from "../../assets/analysed.jpg";
export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">

        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center">
          <p className="text-[#C53030] font-semibold tracking-wide mb-4">
            Understand the Mathematics
          </p>

          <h1 className="text-5xl font-serif font-semibold mb-8">
            Kolam Analysis
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Discover the hidden geometry and mathematical beauty in
            every kolam. Our intelligent analysis tools break down patterns,
            detect symmetry, and reveal the structural elegance behind
            traditional designs.
          </p>

          {/* FEATURES */}
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="text-teal-600 text-xl">📐</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Symmetry Detection</p>
                <p className="text-gray-600">
                  Automatically identify rotational and reflective symmetries in designs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-rose-600 text-xl">🔍</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Pattern Breakdown</p>
                <p className="text-gray-600">
                  See how complex kolams are built from simple repeating elements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#C53030] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition">
            Get Started Free
          </button>
        </div>

        {/* RIGHT SECTION – IMAGE CARD */}
        <div className="relative bg-white shadow-2xl rounded-3xl p-6 flex items-center justify-center">
          <img
            src={analysed}
            alt="kolam"
            className="rounded-2xl w-full object-cover"
          />

          {/* --- BADGES OVER IMAGE --- */}

          {/* Symmetry Type */}
          <div className="absolute top-8 left-8 bg-white shadow-md px-4 py-2 rounded-xl">
            <p className="text-gray-500 text-sm">Symmetry Type</p>
            <p className="text-red-600 font-semibold">8-fold Rotational</p>
          </div>

          {/* Complexity */}
          <div className="absolute top-8 right-8 bg-white shadow-md px-4 py-2 rounded-xl">
            <p className="text-gray-500 text-sm">Complexity</p>
            <p className="text-emerald-600 font-semibold">Intermediate</p>
          </div>

          {/* Dot Grid */}
          <div className="absolute bottom-32 left-12 bg-white shadow-md px-4 py-2 rounded-xl">
            <p className="text-gray-500 text-sm">Dot Grid</p>
            <p className="font-semibold">7 × 7</p>
          </div>

          {/* Lines */}
          <div className="absolute bottom-32 right-12 bg-white shadow-md px-4 py-2 rounded-xl">
            <p className="text-gray-500 text-sm">Lines</p>
            <p className="font-semibold">24 segments</p>
          </div>

          {/* Buttons */}
          <button className="absolute bottom-8 left-10 bg-[#C53030] text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700">
            Analyze Pattern
          </button>

          <button className="absolute bottom-8 right-10 border border-red-400 text-red-500 px-6 py-3 rounded-full shadow-md hover:bg-red-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
