import React, { useRef, useState } from "react";

const BACKEND_URL = "http://localhost:5000/api/analyse/upload"; 
// 🔁 change to your actual backend endpoint

export default function KolamUpload({ onResult }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  // ✅ Validate file
  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG files are allowed");
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return false;
    }

    return true;
  };

  // ✅ Handle upload + backend call
  const handleFile = async (file) => {
    if (!file || !validateFile(file)) return;

    setFileName(file.name);
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // ✅ get auth token
      const formData = new FormData();
      formData.append("image", file);
      console.log("Uploading file:", file);
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ required
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Backend response:", data);

      // ✅ create preview image URL
      const imageUrl = URL.createObjectURL(file);

      // ✅ send data to parent (KolamPage)
      onResult(imageUrl, data.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Something went wrong while uploading");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Drag & drop handlers
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full max-w-3xl rounded-xl border-2 border-dashed bg-white p-10 text-center transition
          ${isDragging ? "border-red-400 bg-red-50" : "border-gray-300"}`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {/* Upload Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100">
            <svg
              className="w-7 h-7 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M7 16V12m0 0V8m0 4h10m-5-8l5 5m0 0l-5 5m5-5H9" />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl font-semibold mb-1">
          Upload a Kolam Image for Analysis
        </h2>
        <p className="text-gray-500 mb-6">
          Drag & drop your image here or click to browse
        </p>

        {/* Upload Button */}
        <button
          onClick={() => inputRef.current.click()}
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        {/* Hidden Input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />

        {/* File info */}
        {fileName && (
          <p className="mt-4 text-sm text-gray-600">
            Selected file: <span className="font-medium">{fileName}</span>
          </p>
        )}

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-4">
          Supported formats: JPG, PNG, JPEG (Max 10MB)
        </p>
      </div>
    </div>
  );
}
