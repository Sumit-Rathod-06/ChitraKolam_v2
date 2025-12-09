import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { name: "Explore", to: "/explore" },
  { name: "Analyzer", to: "/analyzer" },
  { name: "Generate", to: "/generate" },
  { name: "Tutorial Hub", to: "/tutorials" },
  { name: "Create", to: "/create" },
  { name: "Community", to: "/community" },
  { name: "About Us", to: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="px-6 w-full">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="p-1 bg-red-700 rounded-full">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold">Chitrakolam</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex flex-1 justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex gap-4">
            <button className="px-4 py-2 text-sm font-semibold text-white bg-red-700 rounded-lg">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-red-700 rounded-lg">
              Log In
            </button>
          </div>

          {/* MOBILE ICON */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-red-50 text-red-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
