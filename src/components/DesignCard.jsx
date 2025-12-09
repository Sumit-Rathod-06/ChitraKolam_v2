import React from 'react';
import { ArrowRight } from 'lucide-react';

const DesignCard = ({ design, onImageClick }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image with Watermark - Protected from context menu and drag */}
      <div 
        className="relative aspect-square bg-gray-100 select-none cursor-pointer overflow-hidden"
        onClick={() => onImageClick && onImageClick(design)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover pointer-events-none blur-[2px]"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
        {/* Diagonal Watermark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div 
            className="text-white/40 font-bold text-2xl tracking-widest whitespace-nowrap select-none"
            style={{ 
              transform: 'rotate(-35deg)',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            CHITRAKOLAM
          </div>
        </div>
        {/* Multiple diagonal watermarks for better coverage */}
        <div className="absolute inset-0 flex items-start justify-center pt-16 overflow-hidden">
          <div 
            className="text-white/30 font-bold text-lg tracking-widest whitespace-nowrap select-none"
            style={{ 
              transform: 'rotate(-35deg)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            CHITRAKOLAM
          </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-center pb-16 overflow-hidden">
          <div 
            className="text-white/30 font-bold text-lg tracking-widest whitespace-nowrap select-none"
            style={{ 
              transform: 'rotate(-35deg)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            CHITRAKOLAM
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{design.title}</h3>
        <p className="font-bold text-lg mb-2" style={{ color: '#DC2626' }}>₹{design.price}</p>
        <p className="text-xs text-gray-400 mb-3">
          Watermark active — full design visible only after purchase
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${getStatusColor(design.status)}`}>
            {design.status}
          </span>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
            View Details
            <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
