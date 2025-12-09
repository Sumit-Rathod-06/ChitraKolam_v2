"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Brush,
  Pen,
  Lock,
  Upload,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Download,
  Sparkles,
  Palette,
  Grid3X3,
  Circle,
  Eye,
  Trash2,
  Square,
} from "lucide-react";
import Navbar from "../components/NavBar";

// --- Fixed Drawing Resolution ---
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 1300;

const CanvasPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [brushSize, setBrushSize] = useState(25);
  const [opacity, setOpacity] = useState(50);
  const [zoom, setZoom] = useState(75);
  const [gridEnabled, setGridEnabled] = useState(true);
  const [gridSize, setGridSize] = useState(16);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [selectedGridPattern, setSelectedGridPattern] = useState("dot");
  const [currentColor, setCurrentColor] = useState("#DC2626");
  const [ctx, setCtx] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  const gridPatterns = [
    { id: "square", name: "Square Grid", Icon: Square },
    { id: "dot", name: "Dot Grid", Icon: Circle },
  ];

  const gridSizes = [
    { size: 4, name: "4 x 4" },
    { size: 8, name: "8 x 8" },
    { size: 16, name: "16 x 16" },
    { size: 32, name: "32 x 32" },
  ];

  const traditionalColors = [
    "#E63946",
    "#F4A261",
    "#F6BD60",
    "#2A9D8F",
    "#06D6A0",
    "#118AB2",
    "#3A0CA3",
    "#9B5DE5",
    "#FF006E",
    "#FF85A1",
    "#FFD166",
    "#FFFFFF",
  ];

  const [layers, setLayers] = useState([
    { id: 1, name: "Base Pattern", visible: true, locked: true },
    { id: 2, name: "Details", visible: true, locked: true },
  ]);

  // ------------------------------
  // Canvas Initialization
  // ------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    context.fillStyle = "white";
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    context.lineCap = "round";
    context.lineJoin = "round";
    setCtx(context);
  }, []);

  // ------------------------------
  // Drawing Handlers
  // ------------------------------
  const startDrawing = (e) => {
    if (!ctx) return;
    isDrawing.current = true;
    ctx.beginPath();

    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = CANVAS_WIDTH / rect.width;
    const scaleY = CANVAS_HEIGHT / rect.height;

    ctx.moveTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
  };

  const draw = (e) => {
    if (!isDrawing.current || !ctx) return;

    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushSize;
    ctx.globalAlpha = opacity / 100;

    if (selectedTool === "lock") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }

    const rect = canvasRef.current.getBoundingClientRect();
    const scaleX = CANVAS_WIDTH / rect.width;
    const scaleY = CANVAS_HEIGHT / rect.height;

    ctx.lineTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!ctx) return;
    isDrawing.current = false;
    ctx.closePath();
  };
  const fileInputRef = useRef(null);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const imageURL = URL.createObjectURL(file);
  setUploadedImage(imageURL);
};
  const getCanvasScreenshotWithWhiteBg = () => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    // Create offscreen canvas
    const offCanvas = document.createElement("canvas");
    offCanvas.width = CANVAS_WIDTH;
    offCanvas.height = CANVAS_HEIGHT;

    const offCtx = offCanvas.getContext("2d");

    // White background
    offCtx.fillStyle = "#FFFFFF";
    offCtx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw actual canvas on top
    offCtx.drawImage(canvas, 0, 0);

    return offCanvas.toDataURL("image/png");
  };

  const sendToBackend = async () => {
    const imageData = getCanvasScreenshotWithWhiteBg();
    if (!imageData) return;

    try {
      const token = localStorage.getItem("token");

      // ✅ Convert base64 → Blob
      const blob = await fetch(imageData).then(res => res.blob());

      // ✅ Send as FormData (same as uploaded image)
      const formData = new FormData();
      formData.append("image", blob, "canvas.png");
      formData.append("source", "canvas"); // optional metadata

      const response = await fetch(
        "http://localhost:5000/api/canvas/upload-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`, // ✅ required
          },
          body: formData, // ✅ IMPORTANT
        }
      );

      const data = await response.json();
      console.log("Canvas AI response:", data);

      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      }

    } catch (err) {
      console.error("Canvas AI error:", err);
    }
  };




  // ------------------------------
  // Draw Grid
  // ------------------------------
  const drawGrid = useCallback(() => {
    if (!ctx || !gridEnabled) return;

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const spacing = CANVAS_WIDTH / gridSize;

    ctx.strokeStyle = "#D1D5DB";
    ctx.fillStyle = "#9CA3AF";
    ctx.globalAlpha = 0.8;

    for (let i = 0; i <= gridSize; i++) {
      const coord = spacing * i;

      if (selectedGridPattern === "square") {
        ctx.beginPath();
        ctx.moveTo(coord, 0);
        ctx.lineTo(coord, CANVAS_HEIGHT);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, coord);
        ctx.lineTo(CANVAS_WIDTH, coord);
        ctx.stroke();
      } else {
        for (let j = 0; j <= gridSize; j++) {
          ctx.beginPath();
          ctx.arc(i * spacing, j * spacing, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.globalAlpha = opacity / 100;
  }, [ctx, gridSize, selectedGridPattern, gridEnabled]);

  useEffect(() => {
    drawGrid();
  }, [ctx, gridEnabled, gridSize, selectedGridPattern, drawGrid]);
  const sendUploadedImageToBackend = async () => {
    if (!uploadedImage) return;

    const blob = await fetch(uploadedImage).then(res => res.blob());

    const formData = new FormData();
    formData.append("image", blob, "upload.png");
    console.log(formData)
    try {
      const token = localStorage.getItem("token"); 
      const res = await fetch("http://localhost:5000/api/canvas/upload-image", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,   // ✅ required for protect middleware
        },
        body: formData, // must be FormData WITHOUT manual content-type
      });

      const data = await res.json();
      console.log("AI Image URL:", data);

      setGeneratedImage(data.imageUrl);
      // You can show result image on right panel
      // setGeneratedImage(data.outputImage);

    } catch (err) {
      console.error(err);
    }
  };

  // ------------------------------
  // JSX Render
  // ------------------------------
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* LEFT SIDEBAR */}
        <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto shadow-inner">

          {/* Drawing Tools */}
          <div className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-[#B91C1C]">Drawing Tools</h3>
            </div>

            {/* Tool Buttons */}
            <div className="flex space-x-2 mb-6">
              {[
                { id: "brush", icon: Brush, name: "Brush" },
                { id: "pen", icon: Pen, name: "Pen" },
                { id: "upload", icon: Upload, name: "Upload Image" },
              ].map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => {
                    if (tool.id === "upload") {
                      fileInputRef.current.click();
                    } else {
                      setSelectedTool(tool.id);
                    }
                  }}
                  className={`p-3 rounded-lg border-2 ${
                    selectedTool === tool.id
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  <tool.icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />

            {/* Brush Size */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Brush Size: {brushSize}px
              </label>
              <input
                type="range"
                min="2"
                max="50"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                style={{ accentColor: "#DC2626" }}
                className="w-full"
              />
            </div>

            {/* Opacity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Opacity: {opacity}%
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                style={{ accentColor: "#DC2626" }}
                className="w-full"
              />
            </div>
          </div>

          {/* Grid System */}
          <div className="mb-8 border-b pb-4">
            <div className="flex items-center space-x-2 mb-4">
              <Grid3X3 className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Dot Grid System</h3>
            </div>

            {/* Grid Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-sm">Enable Grid</span>
              <button
                onClick={() => setGridEnabled(!gridEnabled)}
                className={`relative inline-flex h-6 w-11 rounded-full transition-colors
                  ${gridEnabled ? "bg-red-600" : "bg-gray-300"}`}
              >
                <span
                  className={`absolute h-4 w-4 bg-white rounded-full transition-transform
                    ${gridEnabled ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>

            {/* Grid Size */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Grid Size</label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {gridSizes.map((g) => (
                  <button
                    key={g.size}
                    onClick={() => setGridSize(g.size)}
                    className={`p-2 border rounded text-sm ${
                      gridSize === g.size
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  >
                    {g.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Pattern */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Grid Pattern</label>
              <div className="flex space-x-3">
                {gridPatterns.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedGridPattern(p.id)}
                    className={`p-3 rounded-lg border-2 ${
                      selectedGridPattern === p.id
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-200 text-gray-500"
                    }`}
                  >
                    <p.Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-8 border-b pb-4">
            <h3 className="font-semibold text-lg mb-3">Color Palette</h3>

            <div className="grid grid-cols-6 gap-2">
              {traditionalColors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-8 h-8 rounded border ${
                    currentColor === c
                      ? "border-red-500 scale-105"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <input
                type="color"
                value={currentColor}
                onChange={(e) => setCurrentColor(e.target.value)}
                className="w-10 h-10"
              />
              <input
                type="text"
                value={currentColor}
                onChange={(e) => setCurrentColor(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

        </div>

        {/* MAIN CANVAS AREA */}
        <div className="flex-1 flex flex-col">

          {/* CANVAS TOOLBAR */}
          <div className="bg-orange-50 border-b px-6 py-3 flex justify-between">
            <div className="flex items-center space-x-4">
              {/* Zoom */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Zoom</span>

                <button onClick={() => setZoom(Math.max(25, zoom - 25))} className="p-1">
                  <ZoomOut className="w-4 h-4" />
                </button>

                <span className="min-w-[3rem] text-center">{zoom}%</span>

                <button onClick={() => setZoom(Math.min(200, zoom + 25))} className="p-1">
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2">
                <RotateCcw />
              </button>
              <button className="p-2">
                <RotateCw />
              </button>

              <button className="flex items-center px-3 py-2 border rounded">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>

              <button
                onClick={sendToBackend}
                className="flex items-center px-3 py-2 bg-red-600 text-white rounded"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI Completion
              </button>
            </div>
          </div>

          {/* CANVAS */}
          <div className="flex-1 bg-gray-200 p-4 flex items-start justify-start">
            <div
              className="bg-white rounded-xl shadow-2xl overflow-hidden"
              style={{
                width: `${CANVAS_WIDTH}px`,
                height: `${CANVAS_HEIGHT}px`,
                transform: `scale(${zoom / 100})`,
                transformOrigin: "center center",
              }}
            >
              <canvas
                ref={canvasRef}
                className="w-full h-full bg-white cursor-crosshair"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
              />
            </div>
          </div>

        </div>
        {/* RIGHT PANEL */}
        <div className="w-80 bg-white border-l border-gray-200 p-4 flex flex-col">

          {/* Uploaded Image Preview (auto height) */}
          {/* Uploaded Image */}
          <div className="border rounded-lg overflow-hidden bg-gray-50 mb-4">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="w-full py-10 flex items-center justify-center text-gray-400 text-sm">
                No Uploaded Image
              </div>
            )}
          </div>

          {/* Generated Image */}
          <div className="border rounded-lg overflow-hidden bg-gray-50 mb-4 mt-4">
            {generatedImage ? (
              <img
                src={generatedImage}
                alt="Generated Kolam"
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="w-full py-10 flex items-center justify-center text-gray-400 text-sm">
                No Image Generated
              </div>
            )}
          </div>
          {/* 👇 SHOW ONLY IF IMAGE IS UPLOADED */}
          {uploadedImage && (
            <button
              onClick={sendUploadedImageToBackend}
              className="w-full mt-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Enhance Image (AI)
            </button>
          )}

          {/* Future Output Panel (fills remaining space) */}
          {/* <div className="border rounded-lg overflow-hidden bg-gray-50 mb-4 mt-4">
            <div className="w-full py-10 flex items-center justify-center text-gray-400 text-sm">
                No Image Generated
            </div>
          </div> */}

        </div>

      </div>
    </div>
  );
};

export default CanvasPage;
