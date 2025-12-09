// KolamStoryUploader.jsx
import { useState } from "react";
import KolamModal from "../KolamModal"; // 1. Import the Modal

export default function KolamStoryUploader() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // Store actual file object
  const [isLoading, setIsLoading] = useState(false); // Loading state for better UX

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file); // Save file for submission
      setImagePreview(URL.createObjectURL(file)); // Create preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload a Kolam image first.");
      return;
    }

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:5005/classify", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.error) {
        alert("Server Error: " + data.error);
        setIsLoading(false);
        return;
      }

      // Map API response -> modal expected structure
      const mappedData = {
        title: data.Detected_Category || "Kolam",
        src: URL.createObjectURL(selectedFile),
        story: data.Story || "No story found",
        tags: [
          data.Detected_State || "Tamil Nadu",
          data.Design_Pattern || "Pattern",
          `${Math.round((data.Confidence || 0) * 100)}% Confidence`,
        ],
        details: {
          origin: data.Origin,
          significance: data.Cultural_Significance,
          pattern: data.Design_Pattern,
          symmetry: data.Symmetry,
          colors: data.Traditional_Colours,
          materials: data.Materials_Used
            ? data.Materials_Used.split(",").map((m) => m.trim())
            : [],
          festive: data.Festive_Significance,
        },
      };

      setModalData(mappedData);
      setIsModalOpen(true); // Open the modal
    } catch (error) {
      console.error("Request failed:", error);
      alert("Failed to connect to Flask API.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fdf6ec]">
      <div className="w-1/2 bg-white shadow-lg rounded-2xl border border-red-200 p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-red-600 text-center">
          Kolam Story Generator
        </h1>

        <p className="text-gray-600 text-center mt-2">
          Upload a Kolam image to generate a unique story using our RAG model.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Upload Box */}
          <label
            htmlFor="imageUpload"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-red-300 border-dashed rounded-xl cursor-pointer bg-red-50 hover:bg-red-100 transition"
          >
            {!imagePreview ? (
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="w-12 h-12 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2a2 2 0 002 2h14a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V3"
                  />
                </svg>
                <p className="text-red-600 font-medium">
                  Click to Upload Kolam Image
                </p>
                <p className="text-gray-500 text-sm">JPG, PNG allowed</p>
              </div>
            ) : (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full object-cover rounded-xl"
              />
            )}

            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white rounded-xl font-semibold transition ${
              isLoading
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {isLoading ? "Analyzing Kolam..." : "Generate Story"}
          </button>
        </form>
      </div>

      {/* 2. Render the Modal Component here */}
      <KolamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
      />
    </div>
  );
}
