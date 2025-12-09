import React, { useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';

const ArtworkGrid = ({ artworks }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {artworks.map((art) => (
          <div
            key={art.id}
            className="aspect-square rounded-xl overflow-hidden bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(art)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={art.img}
              alt={art.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage?.img}
        title={selectedImage?.title}
      />
    </>
  );
};

export default ArtworkGrid;