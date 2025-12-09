import React, { useState } from 'react';
import { X, Upload, Image, Link, FileImage } from 'lucide-react';

const ApplyCopyrightModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    image: null,
    imagePreview: null,
    title: '',
    description: '',
    proofImage: null,
    proofImagePreview: null,
    proofLink: ''
  });

  if (!isOpen) return null;

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [field]: file,
        [`${field}Preview`]: URL.createObjectURL(file)
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Copyright Application:', formData);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const clearImage = (field) => {
    setFormData({
      ...formData,
      [field]: null,
      [`${field}Preview`]: null
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Apply for Copyright</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Design Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Design Image <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              {formData.imagePreview ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => clearImage('image')}
                    className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gray-400 transition-colors bg-gray-50">
                  <div className="flex flex-col items-center justify-center py-6">
                    <Image size={40} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload design image</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'image')}
                    className="hidden"
                    required
                  />
                </label>
              )}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter design title"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your design (optional)"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Proof Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proof Image <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Upload an image proving your ownership (e.g., original sketch, creation process)
            </p>
            <div className="relative">
              {formData.proofImagePreview ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={formData.proofImagePreview}
                    alt="Proof Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => clearImage('proofImage')}
                    className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gray-400 transition-colors bg-gray-50">
                  <div className="flex flex-col items-center justify-center py-4">
                    <FileImage size={32} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Upload proof image</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'proofImage')}
                    className="hidden"
                    required
                  />
                </label>
              )}
            </div>
          </div>

          {/* Proof Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proof Link <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Link to additional proof (e.g., social media post, portfolio)
            </p>
            <div className="relative">
              <Link size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="url"
                name="proofLink"
                value={formData.proofLink}
                onChange={handleInputChange}
                placeholder="https://example.com/proof"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-medium rounded-xl transition-colors"
            style={{ backgroundColor: '#DC2626' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
          >
            Apply for Copyright
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyCopyrightModal;
