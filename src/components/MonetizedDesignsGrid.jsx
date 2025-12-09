import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DesignCard from './DesignCard';
import ImagePreviewModal from './ImagePreviewModal';
import UploadMonetizationModal from './UploadMonetizationModal';

const MonetizedDesignsGrid = ({ designs, title = 'Monetized Designs', isOwnProfile = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          {isOwnProfile && (
            <button 
              onClick={() => setIsUploadModalOpen(true)}
              className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" 
              style={{ backgroundColor: '#DC2626' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
            >
              <Plus size={16} />
              <span>Upload for Monetization</span>
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {designs.map((design) => (
            <DesignCard 
              key={design.id} 
              design={design} 
              onImageClick={(design) => setSelectedImage(design)}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.image}
        title={selectedImage?.title}
        showWatermark={true}
      />

      {/* Upload Monetization Modal */}
      <UploadMonetizationModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </>
  );
};

export default MonetizedDesignsGrid;
