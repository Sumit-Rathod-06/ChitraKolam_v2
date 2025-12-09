import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const CopyrightDesignCard = ({ design, onImageClick }) => {
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return (
          <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center z-10">
            <Shield size={12} className="text-white" />
          </div>
        );
      case 'pending':
        return (
          <div className="absolute top-3 right-3 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center z-10">
            <Shield size={12} className="text-white" />
          </div>
        );
      case 'rejected':
        return (
          <div className="absolute top-3 right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center z-10">
            <Shield size={12} className="text-white" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image with Status Badge */}
      <div 
        className="relative aspect-square bg-gray-100 cursor-pointer overflow-hidden"
        onClick={() => onImageClick && onImageClick(design)}
        onContextMenu={(e) => e.preventDefault()}
      >
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
        {getStatusBadge(design.status)}
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{design.title}</h3>
        <p className="text-gray-500 text-sm mb-1">{design.date}</p>
        <p className="text-xs text-gray-400 mb-3">ID: {design.copyrightId}</p>

        {/* View Copyright Details Link */}
        <button 
          className="flex items-center text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: '#DC2626' }}
        >
          View Copyright Details
          <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CopyrightDesignCard;
