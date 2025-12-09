export default function KolamGamesSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        Play & Learn Through Kolam Games
      </h2>

      {/* Subheading */}
      <p className="text-gray-600 text-center mt-2 mb-12">
        Interactive games to master the art of kolam
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100">
          <div className="w-14 h-14 bg-[#e63946] rounded-xl flex items-center justify-center mb-6">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/puzzle.png"
              alt="Puzzle Icon"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Kolam Puzzle Match
          </h3>
          <p className="text-gray-600 mb-6">
            Complete the missing pattern pieces to form beautiful kolam designs
          </p>

          <button
            onClick={() => (window.location.href = "/games/puzzle.html")}
            className="px-6 py-2 bg-[#e63946] text-white font-medium rounded-full shadow hover:opacity-90 transition"
          >
            Play Now →
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100">
          <div className="w-14 h-14 bg-[#009688] rounded-xl flex items-center justify-center mb-6">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/circled.png"
              alt="Dot Icon"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Dot-to-Kolam Challenge
          </h3>
          <p className="text-gray-600 mb-6">
            Connect dots in the right sequence to create traditional kolam
            patterns
          </p>

          <button
            onClick={() => (window.location.href = "/games/drawkolam.html")}
            className="px-6 py-2 bg-[#009688] text-white font-medium rounded-full shadow hover:opacity-90 transition"
          >
            Play Now →
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100">
          <div className="w-14 h-14 bg-[#e63946] rounded-xl flex items-center justify-center mb-6">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/paint-palette.png"
              alt="Palette Icon"
              className="w-8 h-8"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Color the Rangoli
          </h3>
          <p className="text-gray-600 mb-6">
            Fill intricate rangoli patterns with vibrant colors and create
            masterpieces
          </p>

          <button
            onClick={() => (window.location.href = "/games/color.html")}
            className="px-6 py-2 bg-[#e63946] text-white font-medium rounded-full shadow hover:opacity-90 transition"
          >
            Play Now →
          </button>
        </div>
      </div>
    </section>
  );
}
