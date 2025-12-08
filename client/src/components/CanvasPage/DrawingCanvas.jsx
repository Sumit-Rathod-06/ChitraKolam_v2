// DrawingCanvas.jsx

import React, { useEffect, useState, useCallback } from 'react';

const DrawingCanvas = ({ canvasRef, activeTool }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  // Constants for Canvas size
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 600;

  // Function to set up the context and drawing styles
  const setupContext = useCallback((ctx) => {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = activeTool.size;
    ctx.strokeStyle = activeTool.color;
    // For eraser, set composite operation to 'destination-out'
    if (activeTool.name === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
    }
  }, [activeTool]);

  // Start Drawing
  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { offsetX, offsetY } = event.nativeEvent;

    setupContext(ctx);

    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  // Draw Movement
  const draw = (event) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { offsetX, offsetY } = event.nativeEvent;

    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  // Stop Drawing
  const stopDrawing = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        // Initial setup for background color and context
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, [canvasRef]);

  // Re-run setupContext when tool changes to update styles immediately
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        setupContext(ctx);
    }
  }, [activeTool, setupContext]);


  return (
    <div className="relative border-4 border-gray-300 rounded-lg bg-gray-100 shadow-inner">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        className="cursor-crosshair"
      />
      {/* Visual representation of a dot grid based on the wireframe */}
      <div className="absolute top-0 left-0 w-full h-full p-6 pointer-events-none opacity-50">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="flex justify-around w-full" style={{ height: `${100/15}%` }}>
            {[...Array(15)].map((_, j) => (
              <span key={j} className="w-1 h-1 bg-gray-500 rounded-full inline-block" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawingCanvas;