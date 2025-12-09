import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatsCards from '../components/StatsCards';
import MonetizedDesignsGrid from '../components/MonetizedDesignsGrid';

const MonetizationPage = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const stats = {
    totalEarnings: '24,567',
    thisMonth: '3,420',
    designsSold: '187',
  };

  const monetizedDesigns = [
    {
      id: 1,
      title: 'Lotus Kolam Design',
      price: '299',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Mandala Kolam',
      price: '399',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Festival Rangoli',
      price: '549',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Peacock Kolam',
      price: '449',
      status: 'Rejected',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Simple Dot Kolam',
      price: '199',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Geometric Kolam',
      price: '349',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <Sidebar activeItem={activeMenuItem} onItemChange={setActiveMenuItem} />

      {/* Main Content */}
      <div className="flex-1">
        <StatsCards stats={stats} />
        <MonetizedDesignsGrid designs={monetizedDesigns} />
      </div>
    </div>
  );
};

export default MonetizationPage;
