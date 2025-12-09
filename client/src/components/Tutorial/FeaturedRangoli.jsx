import landf from "../../assets/landf.jpg";
export default function FeaturedRangoli() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Today's Featured Rangoli
      </h2>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src={landf}
            alt="Lotus Mandala Kolam"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Traditional Swastik Floral Rangoli
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            This rangoli features a central Swastik motif symbolizing
            prosperity, surrounded by intricate white spiral patterns. The
            vibrant floral elements in shades of green, pink, yellow, and blue
            add symmetry and elegance, making it perfect for festive
            celebrations and auspicious occasions.
          </p>

          {/* YouTube Embed */}
          <div className="rounded-xl overflow-hidden shadow-md mb-2 h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/T93GImW4C08"
              title="How to Draw Lotus Mandala Kolam"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-center text-gray-500 text-sm">
            Watch: How to Draw This Kolam
          </p>
        </div>
      </div>
    </section>
  );
}
