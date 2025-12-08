// RightPanel.jsx

import React from 'react';
import { Image, BarChart3, Palette } from 'lucide-react';

const RightPanel = ({ kolamAnalysis }) => {
  // Static color data for the palette
  const STATIC_COLOR_PALETTE = [
    { name: 'R', hex: '#FF0000', value: 80, label: 'Red' },
    { name: 'G', hex: '#008000', value: 50, label: 'Green' },
    { name: 'B', hex: '#0000FF', value: 30, label: 'Blue' },
    { name: 'H', hex: '#FFD700', value: 10, label: 'Hue (Yellow)' },
  ];

  // Static image placeholder for the complete kolam
  const STATIC_KOLAM_PREVIEW_URL = "https://via.placeholder.com/150?text=Kolam+Preview";

  const renderAnalysisItem = (key, value) => (
    <div className="flex justify-between items-center py-1 border-b last:border-b-0 border-gray-100">
      <span className="text-sm font-medium text-gray-600">{key}:</span>
      <span className="text-sm font-bold text-gray-800">{value}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      
      {/* Complete Kolam Preview */}
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Image size={18} className="mr-2 text-purple-500" />
          Complete Kolam
        </h3>
        <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden mb-3">
            <img 
                src={STATIC_KOLAM_PREVIEW_URL} 
                alt="Complete Kolam Preview" 
                className="w-full h-full object-cover"
            />
            {/* Placeholder for the whole color palette figmo-like element */}
            <div className="absolute right-0 top-0 h-full w-4 bg-gray-200 flex flex-col justify-end">
                <div className="w-full h-1/4 bg-red-500"></div>
                <div className="w-full h-1/4 bg-green-500"></div>
                <div className="w-full h-1/4 bg-blue-500"></div>
                <div className="w-full h-1/4 bg-yellow-500"></div>
            </div>
        </div>
        
        {/* Color Palette (R, G, B, H, S, V) */}
        <div className="mt-2 space-y-1">
          {STATIC_COLOR_PALETTE.map(color => (
            <div key={color.name} className="flex items-center justify-between">
              <span className="text-sm font-bold" style={{ color: color.hex }}>{color.name}:</span>
              <div className="flex-grow mx-2 h-2 rounded-full" style={{ backgroundColor: color.hex, opacity: color.value / 100 }}></div>
              <span className="text-xs text-gray-500">{color.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Section */}
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <BarChart3 size={18} className="mr-2 text-green-500" />
          Kolam Analysis
        </h3>
        <div className="space-y-1">
          {renderAnalysisItem('Dot Grid', kolamAnalysis.dots)}
          {renderAnalysisItem('Symmetry', kolamAnalysis.symmetry)}
          {renderAnalysisItem('Color Count', kolamAnalysis.colors)}
          {renderAnalysisItem('Total Dots', kolamAnalysis.dotCount)}
          {renderAnalysisItem('Stroke Count', '32')}
        </div>
      </div>
    </div>
  );
};

export default RightPanel;