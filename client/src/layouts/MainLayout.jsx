import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children, profileImage }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header profileImage={profileImage} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;