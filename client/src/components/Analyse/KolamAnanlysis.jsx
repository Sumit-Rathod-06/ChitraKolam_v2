import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Download,
  Share2,
  Info,
  Scan,
  Grid,
  Dot,
  Palette,
} from "lucide-react";
import  { useState } from "react";

export default function KolamAnalysis({ image, analysis }) {
  if (!analysis) return null;
  const [activeVisual, setActiveVisual] = useState(null);

  const score = analysis.final_score ?? 0;
  const circumference = 2 * Math.PI * 70;
  const progress = circumference - (score / 100) * circumference;

  const metrics = [
    { key: "dots", title: "Dot Placement & Grid", icon: <Grid /> },
    { key: "symmetry", title: "Symmetry", icon: <Scan /> },
    { key: "complexity", title: "Complexity", icon: <Dot /> },
    { key: "cleanliness", title: "Cleanliness & Precision", icon: <Info /> },
    { key: "color", title: "Color Harmony", icon: <Palette /> },
  ];

  const visuals = [
    ["center_symmetry", "Detected Center"],
    ["boundary", "Boundary Detection"],
    ["dots", "Dot Detection"],
    ["edges", "Edges"],
    ["summary_chart", "Overall Summary"],
    ["color_palette", "Color Segmentation"],
  ];
  const handleDownloadPDF = async () => {
  const element = document.getElementById("kolam-report");

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",

    onclone: (clonedDoc) => {
      // ✅ Replace ALL OKLCH colors with RGB-safe fallback
      const all = clonedDoc.querySelectorAll("*");

      all.forEach((el) => {
        const style = window.getComputedStyle(el);

        if (style.backgroundColor.includes("oklch")) {
          el.style.backgroundColor = "#ffffff";
        }
        if (style.color.includes("oklch")) {
          el.style.color = "#000000";
        }
        if (style.borderColor.includes("oklch")) {
          el.style.borderColor = "#e5e7eb";
        }
      });
    },
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save("Kolam_Analysis_Report.pdf");
};



  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div id="kolam-report" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <h2 className="font-semibold text-lg">Uploaded Image</h2>

          <img
            src={image}
            alt="Uploaded Kolam"
            className="rounded-xl border bg-white p-2"
          />

          <p className="text-3xl font-bold">
            {score.toFixed(2)} / 100
          </p>

          {/* Feedback */}
          <div className="bg-yellow-50 border-l-4 border-red-500 p-4 rounded-xl">
            <p className="font-semibold mb-2">Overall Feedback</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {analysis.feedback}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <h2 className="font-semibold text-lg">AI Generated Analysis Views</h2>

          {/* Visualizations */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {visuals.map(([key, title]) => (
              <div
                key={key}
                className="min-w-[180px] bg-black rounded-xl p-2"
              >
                {analysis.visualizations?.[key] ? (
                  <img
                    src={`data:image/png;base64,${analysis.visualizations[key]}`}
                    className="h-28 w-full object-contain rounded-lg cursor-pointer hover:opacity-90"
                    alt={title}
                    onClick={() =>
                      setActiveVisual({
                        title,
                        image: analysis.visualizations[key],
                      })
                    }
                  />

                ) : (
                  <div className="h-28 bg-gray-800 rounded-lg" />
                )}

                <p className="text-xs text-center text-white mt-2">
                  {title}
                </p>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <h2 className="font-semibold text-lg">Performance Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map(({ key, title, icon }) => (
              <Metric
                key={key}
                icon={icon}
                title={title}
                score={analysis.metrics?.[key]?.score ?? 0}
              />
            ))}
          </div>

          {/* Final Score Circle */}
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <p className="font-semibold mb-4">Final Score</p>

            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#eee"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="#b91c1c"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold">{score.toFixed(1)}</p>
                <p className="text-sm text-gray-500">out of 100</p>
              </div>
            </div>

            <div className="mt-4 inline-block bg-gray-100 px-4 py-1 rounded-full text-sm font-semibold">
              Grade: <span className="text-red-600">{analysis.grade}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="max-w-7xl mx-auto mt-10 flex justify-center gap-4">
        <button
          onClick={handleDownloadPDF}
          className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow"
        >
          <Download size={18} /> Download Report
        </button>

        <button className="border border-teal-500 text-teal-600 px-6 py-3 rounded-full flex items-center gap-2">
          <Share2 size={18} /> Share Result
        </button>
      </div>
      {activeVisual && (
      <div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        onClick={() => setActiveVisual(null)}
      >
        <div
          className="bg-white rounded-2xl p-4 max-w-5xl w-[95%]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <p className="font-semibold">{activeVisual.title}</p>
            <button
              onClick={() => setActiveVisual(null)}
              className="text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {/* Image */}
          <img
            src={`data:image/png;base64,${activeVisual.image}`}
            className="w-full max-h-[75vh] object-contain rounded-xl bg-black"
            alt={activeVisual.title}
          />
        </div>
      </div>
    )}

    </div>
  );
}

/* ================= METRIC COMPONENT ================= */

function Metric({ icon, title, score }) {
  const percentage = Math.min(score * 5, 100);
  const barColor = score >= 12 ? "bg-emerald-500" : "bg-red-500";

  return (
    <div className="bg-white rounded-xl p-4 shadow space-y-2">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon}
        {title}
      </div>
      <p className="text-xl font-bold">
        {score.toFixed(1)} <span className="text-sm font-normal">/ 20</span>
      </p>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className={`h-full ${barColor} rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
