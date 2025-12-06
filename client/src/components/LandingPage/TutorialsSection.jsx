import React from "react";
import tutorialImg from "../../assets/tutorial-step.png"; 
// Replace this with your actual image path

export default function TutorialsSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Card */}
        <div className="relative">
          <div className="bg-white shadow-xl rounded-3xl p-4 md:p-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={tutorialImg}
                alt="Tutorial Step"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bookmark icon */}
            <div className="absolute bottom-6 right-6 bg-white shadow-md rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 2a2 2 0 00-2 2v14l7-4 7 4V4a2 2 0 00-2-2H5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Text Content */}
        <div>
          <p className="text-sm text-pink-600 font-semibold mb-2">
            Learn Step by Step
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Interactive Tutorials
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Master the art of kolam through our beautifully crafted,
            step-by-step interactive tutorials. Each lesson is designed like
            flipping through a traditional notebook, making learning intuitive
            and enjoyable.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-pink-500 rounded-full mt-1"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Structured Learning Path</span><br />
                Progress from simple dots to complex patterns at your own pace.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-teal-500 rounded-full mt-1"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Visual Demonstrations</span><br />
                Watch detailed animations showing every stroke and technique.
              </p>
            </div>
          </div>

          <button className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition">
            Get Started Free
          </button>
        </div>

      </div>
    </section>
  );
}
