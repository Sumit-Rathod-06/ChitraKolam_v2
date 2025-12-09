import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-2 sm:mb-0">Chitrakolam © 2024</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-700 transition-colors">About</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Help</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;