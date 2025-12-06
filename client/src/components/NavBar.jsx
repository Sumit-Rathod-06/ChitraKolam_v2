import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { name: "Explore", href: "#explore", isActive: true },
  { name: "Analyzer", href: "#analyzer" },
  { name: "Generate", href: "#generate" },
  { name: "Tutorial Hub", href: "#tutorials" },
  { name: "Create", href: "#create" },
  { name: "Community", href: "#community" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-40">
      {/* FULL WIDTH CONTAINER (NO CENTERING) */}
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">

          {/* LEFT: LOGO */}
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-red-700/80 rounded-full">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-wide">
              Chitrakolam
            </span>
          </div>

          {/* CENTER: NAV LINKS */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.isActive
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* RIGHT: LOGIN / SIGNUP */}
          <div className="hidden lg:flex lg:items-center space-x-4">
            <button className="px-4 py-2 text-white text-sm font-semibold rounded-lg bg-red-700 hover:bg-red-800">
              Sign In
            </button>
            <button className="px-4 py-2 text-white text-sm font-semibold rounded-lg bg-red-700 hover:bg-red-800">
              Log In
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.isActive
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-red-700'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 space-y-2 border-t border-gray-200">
            <button className="w-full px-3 py-2 text-white font-semibold rounded-lg bg-red-700 hover:bg-red-800">
              Sign In
            </button>
            <button className="w-full px-3 py-2 text-red-700 font-semibold rounded-lg border-2 border-red-700 hover:bg-red-50">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
