import React from "react";
import canvas from "../../assets/canvas.png"
export default function CreateKolamSection() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">

        {/* LEFT SIDE – EDITOR MOCKUP */}
        <div className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          
          {/* Top Bar */}
          

          {/* Image / Canvas */}
          <div className="relative">
            <img
              src={canvas}
              alt="Kolam Editor"
              className="w-full object-cover"
            />

            {/* Floating Tools */}
            <div className="my-1 px-6 py-3 text-gray-400 text-sm text-center">
                Designing with precision • AI Canvas Tools
            </div>
          </div>

        </div>

        {/* RIGHT SIDE – TEXT CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="text-[#C53030] font-semibold tracking-wide mb-3">
            Express Your Creativity
          </p>

          <h1 className="text-5xl font-serif font-semibold mb-6">
            Create Your Kolam
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Bring your imagination to life with our intuitive design tool.
            Whether you're sketching a traditional pattern or inventing
            something entirely new, our editor gives you complete creative
            freedom with professional-grade features.
          </p>

          {/* Features */}
          <div className="space-y-6 mb-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <span className="text-rose-500 text-xl">🎨</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Customizable Tools</p>
                <p className="text-gray-600">
                  Choose from brushes, dots, lines, and fills to create your unique design.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <span className="text-teal-600 text-xl">📏</span>
              </div>
              <div>
                <p className="font-semibold text-lg">Smart Grid System</p>
                <p className="text-gray-600">
                  Work with traditional dot grids or create freeform designs with ease.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#C53030] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}
