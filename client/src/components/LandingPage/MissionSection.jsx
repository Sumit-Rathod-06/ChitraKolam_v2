import React from "react";
import { Archive, GraduationCap, Handshake, Globe } from "lucide-react";
import woman from "../../assets/woman.jpg"
export default function MissionSection() {
  const features = [
    {
      icon: Archive,
      title: "Digital Archive",
      desc: "Preserving thousands of traditional patterns from across India",
    },
    {
      icon: GraduationCap,
      title: "Educational Program",
      desc: "Teaching young minds about their cultural heritage",
    },
    {
      icon: Handshake,
      title: "Artist Collaboration",
      desc: "Working with master artists to document traditional techniques",
    },
    {
      icon: Globe,
      title: "Global Outreach",
      desc: "Sharing Indian culture with art enthusiasts worldwide",
    },
  ];

  return (
    <section className="bg-red-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">
            Preserving Cultural Heritage
          </h2>
          <p className="text-gray-200 mb-10 max-w-xl">
            ChitraKolam is more than just a digital platform – it's a bridge
            connecting ancient Indian traditions with modern technology. We're
            committed to preserving the rich heritage of Kolam artistry for
            future generations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-red-700 p-5 rounded-xl shadow-md flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-500">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-200 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-semibold py-3 px-6 rounded-lg shadow-md">
            Learn More About Our Mission
          </button>
        </div>

        {/* Right side image */}
        <div className="relative">
          <img
            src={woman} // replace with your image path
            alt="Authentic Traditions"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-90 text-white rounded-lg px-4 py-3">
            <h4 className="font-semibold text-yellow-400">
              Authentic Traditions
            </h4>
            <p className="text-sm">Capturing the essence of traditional Kolam artistry</p>
          </div>
        </div>
      </div>
    </section>
  );
}