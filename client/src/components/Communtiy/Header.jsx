import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#dc2626' }}>
                C
              </div>
              <span className="text-xl font-bold text-gray-900">ChitraKolam</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Create</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Analyze</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Generate</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Tutorial</a>
              <a href="#" style={{ color: '#dc2626' }} className="font-semibold">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Explore</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Login</button>
            <button 
              className="text-white px-6 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#dc2626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc1616'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;