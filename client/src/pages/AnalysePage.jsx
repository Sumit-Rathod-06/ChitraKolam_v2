import React, { useState } from "react";
import KolamUpload from "../components/Analyse/KolamUpload";
import KolamAnalysis from "../components/Analyse/KolamAnanlysis";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
const KolamPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <>
      <Navbar />
      {!uploadedImage ? (
        <KolamUpload
          onResult={(imageUrl, analysis) => {
            setUploadedImage(imageUrl);
            setAnalysisData(analysis);
          }}
        />
      ) : (
        <KolamAnalysis image={uploadedImage} analysis={analysisData} />
      )}
      <Footer />
    </>
  );
};

export default KolamPage;
