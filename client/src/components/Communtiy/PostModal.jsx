import React, { useState } from 'react';
import { X, Image } from 'lucide-react';

const PostModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('festival');
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onSubmit({
        title,
        description,
        image: imagePreview || 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
        category
      });
      setTitle('');
      setDescription('');
      setImage('');
      setImagePreview('');
      setCategory('festival');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Create New Post</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kolam Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your kolam title..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#dc2626' }}
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write about your kolam creation..."
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#dc2626' }}
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ focusRingColor: '#dc2626' }}
              onFocus={(e) => e.target.style.borderColor = '#dc2626'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <option value="festival">Festival</option>
              <option value="geometric">Geometric</option>
              <option value="traditional">Traditional</option>
              <option value="modern">Modern</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-600 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                <Image size={32} className="text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">Click to upload image</p>
                <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</p>
              </label>
            </div>

            {imagePreview && (
              <div className="mt-4">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded-lg" />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#dc2626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc1616'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
