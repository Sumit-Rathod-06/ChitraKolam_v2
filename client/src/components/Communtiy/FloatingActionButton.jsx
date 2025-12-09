import React from 'react';
import { Plus } from 'lucide-react';

const FloatingActionButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-8 right-8 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group z-50"
      style={{ backgroundColor: '#dc2626' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc1616'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
    >
      <Plus size={24} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        New Post
      </span>
    </button>
  );
};

export default FloatingActionButton;