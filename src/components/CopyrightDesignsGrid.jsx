import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CopyrightDesignCard from './CopyrightDesignCard';
import ImagePreviewModal from './ImagePreviewModal';
import ApplyCopyrightModal from './ApplyCopyrightModal';

const CopyrightDesignsGrid = ({ designs, isOwnProfile = true }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCopyrightModalOpen, setIsCopyrightModalOpen] = useState(false);

  return (
    <>
      <div>
        {/* Header with Upload Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Copyright Designs</h2>
          {isOwnProfile && (
            <button 
              onClick={() => setIsCopyrightModalOpen(true)}
              className="flex items-center space-x-2 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors" 
              style={{ backgroundColor: '#DC2626' }} 
              onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
            >
              <Plus size={16} />
              <span>Apply for Copyright</span>
            </button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {designs.map((design) => (
            <CopyrightDesignCard 
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

      {/* Apply Copyright Modal */}
      <ApplyCopyrightModal
        isOpen={isCopyrightModalOpen}
        onClose={() => setIsCopyrightModalOpen(false)}
      />
    </>
  );
};

export default CopyrightDesignsGrid;
