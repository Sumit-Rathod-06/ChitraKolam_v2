// ToolsPanel.jsx

import React from 'react';
import { Brush, Eraser, Download, Pipette, Square, ArrowLeft, ArrowRight } from 'lucide-react';

// Static Brush options and colors
const BRUSH_COLORS = ['#000000', '#FF0000', '#0096FF', '#FFD700', '#008000', '#800080'];
const BRUSH_SIZES = [3, 8, 15];

const ToolButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    title={label}
    className={`p-3 rounded-full transition-all ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
        : 'text-gray-600 hover:bg-gray-200 hover:text-blue-600'
    }`}
  >
    <Icon size={20} />
  </button>
);

const ToolsPanel = ({ activeTool, setActiveTool, handleExport }) => {
  const handleBrushChange = (color, size) => {
    setActiveTool({ name: 'brush', color, size });
  };

  const handleEraserChange = (size) => {
    setActiveTool({ name: 'eraser', color: 'white', size }); // Eraser color is technically ignored, but name is key
  };

  const isBrushActive = activeTool.name === 'brush';
  const isEraserActive = activeTool.name === 'eraser';

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-xl border border-gray-100">
      
      {/* Top Row: Brushes, Highlighter, Eraser */}
      <div className="flex space-x-6 mb-4">
        
        {/* Undo/Redo - Static for now */}
        <div className="flex space-x-2">
            <ToolButton icon={ArrowLeft} label="Undo" isActive={false} onClick={() => console.log('Undo clicked')} />
            <ToolButton icon={ArrowRight} label="Redo" isActive={false} onClick={() => console.log('Redo clicked')} />
        </div>

        <div className="border-l border-gray-200"></div>

        {/* Brushes */}
        <ToolButton 
          icon={Brush} 
          label="Brush" 
          isActive={isBrushActive} 
          onClick={() => handleBrushChange(activeTool.color, activeTool.size)} 
        />
        
        {/* Highlighter/Stroke Tool */}
        <ToolButton 
          icon={Pipette} // Using Pipette as a placeholder for a specific Kolam tool/highlighter
          label="Kolam Stroke Tool" 
          isActive={activeTool.name === 'stroke'} 
          onClick={() => setActiveTool({ name: 'stroke', color: activeTool.color, size: activeTool.size })} 
        />

        {/* Square/Dot Tool */}
        <ToolButton 
          icon={Square} 
          label="Dot/Square Tool" 
          isActive={activeTool.name === 'dot'} 
          onClick={() => setActiveTool({ name: 'dot', color: activeTool.color, size: activeTool.size })} 
        />
        
        {/* Eraser */}
        <ToolButton 
          icon={Eraser} 
          label="Eraser" 
          isActive={isEraserActive} 
          onClick={() => handleEraserChange(activeTool.size)} 
        />
        
        <div className="border-l border-gray-200"></div>

        {/* Export Button */}
        <ToolButton 
          icon={Download} 
          label="Export" 
          isActive={false} 
          onClick={handleExport}
        />
      </div>

      {/* Bottom Row: Color and Size Selectors */}
      <div className="flex space-x-6 items-center p-2 rounded-full bg-gray-50 border">
        
        {/* Color Palette */}
        <div className="flex space-x-2">
          {BRUSH_COLORS.map(color => (
            <button
              key={color}
              onClick={() => handleBrushChange(color, activeTool.size)}
              style={{ backgroundColor: color }}
              className={`w-6 h-6 rounded-full transition-all border-2 ${
                activeTool.color === color && isBrushActive ? 'border-blue-500 scale-110' : 'border-white hover:scale-105'
              }`}
              title={`Select Color ${color}`}
            />
          ))}
        </div>

        <div className="border-l border-gray-200 h-6"></div>

        {/* Size Selector */}
        <div className="flex space-x-3 items-center">
          {BRUSH_SIZES.map(size => (
            <button
              key={size}
              onClick={() => isBrushActive ? handleBrushChange(activeTool.color, size) : handleEraserChange(size)}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${
                activeTool.size === size ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title={`Set Size to ${size}`}
            >
              <div style={{ width: size, height: size }} className="rounded-full bg-current"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPanel;