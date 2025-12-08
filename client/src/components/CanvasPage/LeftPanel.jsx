// LeftPanel.jsx

import React from 'react';
import { Upload, Shuffle, CheckCircle } from 'lucide-react';

const LeftPanel = ({ analysisData, setActiveTool }) => {
  // Static shape selection options from the wireframe
  const SHAPE_OPTIONS = [
    { label: 'Dot', tool: 'dot' },
    { label: 'Square', tool: 'square' },
    { label: 'Stroke', tool: 'stroke' },
    { label: 'Bilateral Symmetric', tool: 'sym_bilateral' },
    { label: 'Grid', tool: 'grid' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Upload Section */}
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Upload size={18} className="mr-2 text-red-500" />
          Upload Kolam
        </h3>
        <button className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-red-500 hover:text-red-600 transition">
          Click to Upload Image
        </button>
      </div>

      {/* Theme/Shape Selection */}
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Shuffle size={18} className="mr-2 text-blue-500" />
          Kolam Type / Shapes
        </h3>
        <ul className="space-y-2">
          {SHAPE_OPTIONS.map(option => (
            <li key={option.label}>
              <button
                onClick={() => setActiveTool({ name: option.tool, size: 5, color: '#000000' })}
                className="w-full text-left p-2 text-sm rounded-md transition-all hover:bg-blue-50 hover:text-blue-700"
              >
                {option.label}
              </button>
            </li>
          ))}
          <li className="mt-3 pt-2 border-t border-gray-100">
             <button className="w-full text-left p-2 text-sm rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                Select All Shapes UI
             </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;