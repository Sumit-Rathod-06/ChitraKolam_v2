import React, { useState } from 'react';

// ==========================================
// SUB-COMPONENTS (Defined here for single-file copy-paste)
// ==========================================

// --- Simple SVG Icon Placeholders ---
const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);
const BrushIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3Z"/></svg>);
const HighlighterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>);
const EraserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>);

// --- 1. Navbar Component ---
const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        {/* Logo reflecting landing page style */}
        <h1 className="text-xl font-bold text-red-700 flex items-center">
          <span className="mr-2">♦</span> ChitraKolam
        </h1>
        <div className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
          <a href="#" className="hover:text-red-700">Home</a>
          <a href="#" className="text-red-700">Create</a>
          <a href="#" className="hover:text-red-700">Tutorials</a>
          <a href="#" className="hover:text-red-700">Gallery</a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-red-700 font-medium text-sm">My Profile</button>
        <ProfileIcon />
      </div>
    </nav>
  );
};

// --- 2. Left Sidebar Component (Tools & Options) ---
const LeftSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col space-y-4 h-[calc(100vh-64px)] overflow-y-auto">
      
      {/* Upload Box */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center cursor-pointer hover:bg-gray-100 transition">
        <p className="text-gray-500 font-medium">+ Upload Reference</p>
      </div>

      {/* Grid Options */}
      <div className="bg-white p-3 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-3">Grid & Symmetry</h3>
        <div className="space-y-2">
          {['No Dot', 'Square Grid', 'Stroke', 'Bilateral', 'Symmetric'].map((option, index) => (
             <label key={index} className="flex items-center space-x-2 cursor-pointer">
             <input type="radio" name="gridOption" className="form-radio text-red-600 focus:ring-red-500" defaultChecked={index === 1} />
             <span className="text-sm text-gray-700">{option}</span>
           </label>
          ))}
        </div>
      </div>

      {/* Shapes & Thickness UI */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex-1">
        <h3 className="font-semibold text-gray-700 mb-3">Brush & Shapes UI</h3>
        
        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Thickness</label>
          <input type="range" min="1" max="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600" />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Thin</span><span>Thick</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-2">Basic Shapes</label>
          <div className="grid grid-cols-3 gap-2">
            {/* Placeholder shape buttons */}
            <button className="p-2 border rounded hover:bg-red-50 hover:border-red-300 flex justify-center"><div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div></button>
            <button className="p-2 border rounded hover:bg-red-50 hover:border-red-300 flex justify-center"><div className="w-4 h-4 border-2 border-gray-400"></div></button>
            <button className="p-2 border rounded hover:bg-red-50 hover:border-red-300 flex justify-center"><div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-gray-400 border-r-[8px] border-r-transparent"></div></button>
          </div>
        </div>
      </div>
    </aside>
  );
};

// --- 3. Right Sidebar Component (AI, Color, Analysis) ---
const RightSidebar = () => {
  // Static Analysis Data
  const analysisData = {
    dots: 42,
    colorsUsed: 4,
    symmetryScore: "95% (Radial)",
    complexity: "Medium"
  };

  return (
    <aside className="w-72 bg-white border-l border-gray-200 p-4 flex flex-col space-y-4 h-[calc(100vh-64px)] overflow-y-auto">
      
      {/* AI Generation Box */}
      <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-lg border border-red-100 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
          ✨ AI Generation
        </h3>
        <p className="text-xs text-gray-500 mb-3">Draw a rough sketch and let AI complete your Kolam.</p>
        <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition">
          Generate Kolam
        </button>
      </div>

      {/* Complete Box (Placeholder for future features) */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-24 flex items-center justify-center text-gray-400 text-sm">
        Complete / Auto-fill
      </div>

      {/* Whole Color Palette (Figma-like mockup) */}
      <div className="bg-white p-3 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-3">Color Palette</h3>
        <div className="flex space-x-2 mb-3">
          {/* Main Color Picker Area Mockup */}
          <div className="h-32 flex-1 bg-gradient-to-tr from-white via-red-500 to-black rounded-md shadow-inner relative cursor-crosshair">
             <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white rounded-full shadow-sm"></div>
          </div>
          {/* Hue Slider Mockup */}
          <div className="w-6 h-32 bg-gradient-to-b from-red-500 via-green-500 to-blue-500 rounded-md relative">
             <div className="absolute top-1/2 w-full h-2 bg-white border border-gray-300 rounded-sm shadow-sm transform -translate-y-1/2"></div>
          </div>
        </div>
        
        {/* Sliders Mockup (RGB/HSV) */}
        <div className="space-y-2">
          <div className="flex items-center text-xs text-gray-500">
            <span className="w-4">R</span>
            <div className="flex-1 h-2 bg-red-200 rounded-full ml-2 overflow-hidden"><div className="h-full w-3/4 bg-red-500"></div></div>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <span className="w-4">G</span>
            <div className="flex-1 h-2 bg-green-200 rounded-full ml-2 overflow-hidden"><div className="h-full w-1/4 bg-green-500"></div></div>
          </div>
           <div className="flex items-center text-xs text-gray-500">
            <span className="w-4">B</span>
            <div className="flex-1 h-2 bg-blue-200 rounded-full ml-2 overflow-hidden"><div className="h-full w-1/2 bg-blue-500"></div></div>
          </div>
        </div>
      </div>

      {/* Analysis Box */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex-1">
        <h3 className="font-semibold text-gray-700 mb-3 border-b pb-2">Analysis Output</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between"><span className="text-gray-500">No. of dots:</span> <span className="font-medium">{analysisData.dots}</span></li>
          <li className="flex justify-between"><span className="text-gray-500">Colors used:</span> <span className="font-medium">{analysisData.colorsUsed}</span></li>
          <li className="flex justify-between"><span className="text-gray-500">Symmetry:</span> <span className="font-medium">{analysisData.symmetryScore}</span></li>
           <li className="flex justify-between"><span className="text-gray-500">Complexity:</span> <span className="font-medium">{analysisData.complexity}</span></li>
        </ul>
      </div>
    </aside>
  );
};

// --- 4. Canvas Area Component (Center) ---
const CanvasArea = () => {
  const [activeTool, setActiveTool] = useState('brush');

  const tools = [
    { id: 'brush', label: 'Brushes', icon: <BrushIcon /> },
    { id: 'highlighter', label: 'Highlighter', icon: <HighlighterIcon /> },
    { id: 'eraser', label: 'Eraser', icon: <EraserIcon /> },
  ];

  return (
    <main className="flex-1 bg-gray-100 flex flex-col relative">
      {/* The Drawing Canvas */}
      <div className="flex-1 relative m-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Placeholder for the actual HTML Canvas element. 
              In a real implementation, you would use <canvas ref={canvasRef} ... /> here.
          */}
          <div 
            className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My59cmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBIMFYwaDIwdjIwek00MCA0MEgyMFYyMGgyMHYyMHoiIGZpbGw9IiNmOWZhZmYiIC8+')] bg-repeat cursor-crosshair flex items-center justify-center"
          >
            <span className="text-gray-300 font-medium pointer-events-none select-none">
              Drawing Canvas Area <br/> (Draw here to generate Kolam)
            </span>
          </div>

      </div>

      {/* Bottom Toolbar */}
      <div className="h-16 bg-white border-t border-gray-200 px-6 flex items-center justify-between">
        
        {/* Tools (Brushes, Highlighter, Eraser) */}
        <div className="flex space-x-1">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-3 rounded-md flex flex-col items-center justify-center transition-colors ${activeTool === tool.id ? 'bg-red-50 text-red-700 border-red-200 border' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              title={tool.label}
            >
              {tool.icon}
              {/* <span className="text-[10px] mt-1">{tool.label}</span> */}
            </button>
          ))}
           {/* Extra placeholder brushes shown in wireframe */}
           <div className="border-l border-gray-300 mx-2 h-8 self-center"></div>
           <button className="p-2 text-gray-400 hover:text-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pen-tool"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 8.5"></path></svg></button>
           <button className="p-2 text-gray-400 hover:text-gray-600"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg></button>
        </div>

        {/* Export Button */}
        <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
      </div>
    </main>
  );
};


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

const CanvasPage = () => {
  return (
    <div className="h-screen flex flex-col font-sans bg-gray-50 overflow-hidden">
      {/* 1. Top Navigation */}
      <Navbar />

      {/* 2. Main Content Area (3-column layout) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Center Canvas Area */}
        <CanvasArea />

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default CanvasPage;