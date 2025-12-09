// KolamModal.jsx
import React from "react";

export default function KolamModal({ isOpen, onClose, data }) {
  if (!isOpen || !data) return null;
  

  // Destructure details for easier access, provide defaults to prevent errors
  const { details = {} } = data;

  return (
    <div
      className="fixed mt-15 inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-6xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl z-10 bg-white/50 hover:bg-white rounded-full p-2 transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="px-8 pt-8">
          <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>

          <div className="flex gap-2 mt-3 flex-wrap">
            {data.tags &&
              data.tags.map((tag, index) => (
                // I used a small trick here to rotate colors based on index,
                // or you can just make them all the same color
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    index === 0
                      ? "bg-orange-100 text-orange-600"
                      : index === 1
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {/* Body layout */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <img
              src={data.src}
              alt={data.title}
              className="rounded-xl shadow-md object-cover w-full h-auto max-h-[400px]"
            />

            {/* Buttons */}
            <div className="flex mt-4 gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                Share
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                Download
              </button>
            </div>

            {/* STORY SECTION */}
            <div className="mt-6 p-6 bg-yellow-50 rounded-xl shadow-sm border border-yellow-100">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="text-lg font-bold text-gray-800">Story</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{data.story}</p>
            </div>
          </div>

          {/* RIGHT COLUMN — Info cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            <InfoCard
              label="Origin"
              value={details.origin}
              iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              colorClass="text-gray-600"
            />

            <InfoCard
              label="Cultural Significance"
              value={details.significance}
              iconPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              colorClass="text-rose-500"
            />

            <InfoCard
              label="Design Pattern"
              value={details.pattern}
              iconPath="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              colorClass="text-blue-600"
            />

            <InfoCard
              label="Symmetry"
              value={details.symmetry}
              iconPath="M8 7v8a2 2 0 00-2 2h12a2 2 0 00-2-2V7" // simplified
              colorClass="text-purple-600"
            />

            <InfoCard
              label="Traditional Colors"
              value={details.colors}
              iconPath="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              colorClass="text-yellow-600"
            />

            {/* Materials as a list */}
            <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  Materials Used
                </p>
              </div>
              <ul className="list-disc ml-4 mt-1 text-gray-800">
                {details.materials &&
                  details.materials.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Festive Significance (Full Width) */}
            <div className="p-5 bg-gray-50 rounded-xl shadow-sm sm:col-span-2 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <p className="text-sm font-semibold text-gray-600">
                  Festive Occasions
                </p>
              </div>
              <p className="text-gray-800">{details.festive}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component to keep code clean
function InfoCard({ label, value, iconPath, colorClass }) {
  return (
    <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-2 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ${colorClass}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
        <p className="text-sm font-semibold text-gray-600">{label}</p>
      </div>
      <p className="text-gray-800">{value || "N/A"}</p>
    </div>
  );
}
