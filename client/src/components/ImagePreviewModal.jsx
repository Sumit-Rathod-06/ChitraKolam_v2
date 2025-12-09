import React from 'react';
import { X } from 'lucide-react';

const ImagePreviewModal = ({ isOpen, onClose, image, title, showWatermark = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X size={28} />
        </button>

        {/* Image Container */}
        <div 
          className="relative rounded-xl overflow-hidden bg-gray-900"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={image}
            alt={title || 'Preview'}
            className={`w-full h-auto max-h-[85vh] object-contain ${showWatermark ? 'blur-[3px]' : ''}`}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
          
          {/* Watermark Overlay for protected images */}
          {showWatermark && (
            <>
              {/* Center watermark */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <div 
                  className="text-white/50 font-bold text-5xl tracking-[0.3em] whitespace-nowrap select-none"
                  style={{ 
                    transform: 'rotate(-35deg)',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
                  }}
                >
                  CHITRAKOLAM
                </div>
              </div>
              {/* Top-left watermark */}
              <div className="absolute top-20 left-10 overflow-hidden pointer-events-none">
                <div 
                  className="text-white/35 font-bold text-3xl tracking-[0.2em] whitespace-nowrap select-none"
                  style={{ 
                    transform: 'rotate(-35deg)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
                  }}
                >
                  CHITRAKOLAM
                </div>
              </div>
              {/* Bottom-right watermark */}
              <div className="absolute bottom-20 right-10 overflow-hidden pointer-events-none">
                <div 
                  className="text-white/35 font-bold text-3xl tracking-[0.2em] whitespace-nowrap select-none"
                  style={{ 
                    transform: 'rotate(-35deg)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.4)'
                  }}
                >
                  CHITRAKOLAM
                </div>
              </div>
              {/* Top-right watermark */}
              <div className="absolute top-32 right-20 overflow-hidden pointer-events-none">
                <div 
                  className="text-white/30 font-bold text-2xl tracking-[0.2em] whitespace-nowrap select-none"
                  style={{ 
                    transform: 'rotate(-35deg)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  CHITRAKOLAM
                </div>
              </div>
              {/* Bottom-left watermark */}
              <div className="absolute bottom-32 left-20 overflow-hidden pointer-events-none">
                <div 
                  className="text-white/30 font-bold text-2xl tracking-[0.2em] whitespace-nowrap select-none"
                  style={{ 
                    transform: 'rotate(-35deg)',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  CHITRAKOLAM
                </div>
              </div>
            </>
          )}
          
          {/* Title */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">{title}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
