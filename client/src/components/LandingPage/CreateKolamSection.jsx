import React from "react";
import canvas from "../../assets/canvas.png"
import kolamGif from "../../assets/kolam.gif";

export default function CreateKolamSection() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">

        {/* LEFT SIDE – EDITOR MOCKUP */}
        <div className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.15)] overflow-hidden">
            
            {/* 1. Top Bar - This needs to be a separate element to match the design */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                {/* Placeholder for Drawing Tools, Zoom, Export, etc. */}
                <p className="text-sm font-medium text-gray-700">Drawing Tools</p>
                <div className="flex items-center space-x-2">
                    <button className="text-sm text-gray-500 hover:text-gray-700">Export</button>
                    <button className="bg-[#C53030] text-white px-3 py-1 rounded text-xs">AI Completion</button>
                </div>
            </div>
            
            <div className="relative flex">
                {/* 2. Side/Floating Tools - This needs to be a separate element */}
                {/* Use the actual 'canvas.png' for the background/tools if available, 
                  or just keep it simple as in the image */}
                <div className="w-1/4 p-4 border-r border-gray-100 bg-gray-50">
                    {/* Tools content placeholder */}
                    <p className="text-xs text-gray-500">Brush Size</p>
                    <input type="range" className="w-full h-1" />
                    <p className="text-xs text-gray-500 mt-4">Grid Pattern</p>
                    <div className="flex space-x-1 mt-1">
                        <button className="border rounded px-2 py-1">⬜</button>
                        <button className="border rounded px-2 py-1">⚫</button>
                    </div>
                </div>

                {/* 3. Image / Canvas - This is where the GIF should go */}
                {/* Set a fixed or explicit height for the main content area for consistency, 
                  and use object-contain on the image if you want the whole GIF visible without cropping. */}
                <div className="relative flex-grow flex items-center justify-center bg-white" style={{ minHeight: '400px' }}>
                    <img
                        src={kolamGif}
                        alt="Kolam Editor"
                        // The key fix: use object-contain to ensure the entire image is visible,
                        // and w-full h-full to fill the parent container.
                        className="w-full h-full object-contain p-4" 
                    />
                </div>
            </div>

            {/* 4. Floating Tools / Footer text */}
            <div className="my-1 px-6 py-3 text-gray-400 text-sm text-center border-t border-gray-100">
                Designing with precision • AI Canvas Tools
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
