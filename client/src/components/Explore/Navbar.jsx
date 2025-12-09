import { useState } from "react";
import { Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="bg-red-800 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-500 text-red-900 font-bold px-2 py-1 rounded-lg">
          CK
        </div>
        <span className="font-bold text-lg">ChitraKolam</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8 font-medium">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Gallery</a>
        <a href="#" className="hover:text-yellow-400">Learn</a>
        <a href="#" className="hover:text-yellow-400">Community</a>
      </div>

      {/* Dark Mode Button */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-medium px-3 py-1 rounded-lg flex items-center space-x-1"
        >
          <Moon size={16} />
          <span>Dark Mode</span>
        </button>
        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
      </div>
    </nav>
  );
}
