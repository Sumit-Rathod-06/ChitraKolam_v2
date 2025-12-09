import React, { useState, useRef, useEffect } from 'react';
import { LogOut, Receipt } from 'lucide-react';

const Header = ({ profileImage }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navItems = ['Home', 'Create', 'Analyse', 'Community', 'Generate', 'Learn & Fun'];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    setShowDropdown(false);
  };

  const handleTransactions = () => {
    console.log('Opening transactions...');
    setShowDropdown(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold" style={{ color: '#DC2626' }}>Chitrakolam</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Profile Avatar with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-[#DC2626]"
            >
              <img
                src={profileImage || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button
                  onClick={handleTransactions}
                  className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Receipt size={16} className="text-gray-500" />
                  <span>Transactions</span>
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;