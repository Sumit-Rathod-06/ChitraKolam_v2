import React, { useRef, useState } from "react";

const KolamUpload = () => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div
        className={`w-[90%] max-w-5xl rounded-2xl border-2 border-dashed ${
          isDragging ? "border-red-500 bg-red-50" : "border-red-400"
        } p-20 text-center shadow-sm transition`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {/* ✅ SHOW PREVIEW IF IMAGE EXISTS */}
        {preview ? (
          <div className="flex flex-col items-center gap-6">
            <img
              src={preview}
              alt="Uploaded Kolam"
              className="max-h-[350px] rounded-xl shadow-md object-contain"
            />

            <button
              onClick={() => inputRef.current.click()}
              className="rounded-full bg-red-700 px-8 py-3 text-white font-semibold hover:bg-red-800 transition"
            >
              Replace Image
            </button>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="#b91c1c"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V8m0 0l-3 3m3-3l3 3M20 16.5a4.5 4.5 0 00-3.69-4.43A5 5 0 003 11.5 4.5 4.5 0 007.5 16h12.5z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Upload a Kolam Image for Analysis
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 mb-8">
              Drag & drop your image here or click to browse
            </p>

            {/* Upload Button */}
            <button
              onClick={() => inputRef.current.click()}
              className="inline-flex items-center gap-2 rounded-full bg-red-700 px-8 py-3 text-white font-semibold hover:bg-red-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V8m0 0l-3 3m3-3l3 3"
                />
              </svg>
              Upload Image
            </button>

            {/* Info */}
            <p className="mt-6 text-sm text-gray-500">
              Supported formats: JPG, PNG, JPEG (Max 10MB)
            </p>
          </>
        )}

        {/* Hidden Input */}
        <input
          ref={inputRef}
          type="file"
          accept=".jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default KolamUpload;
