import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ArtworkGrid from '../components/ArtworkGrid';
import StatsCards from '../components/StatsCards';
import MonetizedDesignsGrid from '../components/MonetizedDesignsGrid';
import EditProfileModal from '../components/EditProfileModal';
import CopyrightStatsCards from '../components/CopyrightStatsCards';
import CopyrightDesignsGrid from '../components/CopyrightDesignsGrid';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('library');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isOwnProfile] = useState(true); // Set to false to see other user's profile view

  const [profileData, setProfileData] = useState({
    name: 'Mayur Raonang',
    bio: 'Traditional Kolam Artist | Preserving Heritage Through Art',
    occupation: 'Traditional Kolam Artist',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    posts: '16',
    followers: '12',
    following: '8'
  });

  const handleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedData) => {
    setProfileData((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  // Rangoli/Kolam artwork images for Library tab
  const artworks = [
    { id: 1, img: '/rangoli-images/Beautiful Lotus Rangoli.jpg', title: 'Beautiful Lotus Rangoli' },
    { id: 2, img: '/rangoli-images/Picock.jpg', title: 'Peacock Rangoli' },
    { id: 3, img: '/rangoli-images/Sunflower Rangoli.jpg', title: 'Sunflower Rangoli' },
    { id: 4, img: '/rangoli-images/Traditional art.jpg', title: 'Traditional Art' },
    { id: 5, img: '/rangoli-images/Lotus Rangoli.jpg', title: 'Lotus Rangoli' },
    { id: 6, img: '/rangoli-images/Rangoli.jpg', title: 'Classic Rangoli' },
    { id: 7, img: '/rangoli-images/Kolam pattern archive + layout instructions.jpg', title: 'Kolam Pattern' },
    { id: 8, img: '/rangoli-images/MARGAZHI KOLAM- DAY 27.jpg', title: 'Margazhi Kolam' },
    { id: 9, img: '/rangoli-images/intricate kolam designs 1.jpg', title: 'Intricate Kolam' },
    { id: 10, img: '/rangoli-images/beautiful.jpg', title: 'Beautiful Design' },
    { id: 11, img: '/rangoli-images/Om sanakar bharti.jpg', title: 'Om Sankar Bharti' },
    { id: 12, img: '/rangoli-images/White Rangoli Design Images (Kolam Ideas).jpg', title: 'White Rangoli' },
    { id: 13, img: '/rangoli-images/download (5).jpg', title: 'Festive Kolam' },
    { id: 14, img: '/rangoli-images/download (6).jpg', title: 'Traditional Muggu' },
    { id: 15, img: '/rangoli-images/download (7).jpg', title: 'Floral Pattern' },
    { id: 16, img: '/rangoli-images/download (8).jpg', title: 'Geometric Design' },
  ];

  // Monetization stats
  const stats = {
    totalEarnings: '2,847',
    thisMonth: '549',
    designsSold: '12',
  };

  // Monetized designs data
  const monetizedDesigns = [
    {
      id: 1,
      title: 'Diwali Aesthetic Rangoli',
      price: '299',
      status: 'Approved',
      image: '/rangoli-images/MyDiwaliAesthetic.jpg',
    },
    {
      id: 2,
      title: 'Beautiful Unique Rangoli',
      price: '399',
      status: 'Pending',
      image: '/rangoli-images/download (16).jpg',
    },
    {
      id: 3,
      title: 'Rangoli 25 Special',
      price: '549',
      status: 'Approved',
      image: "/rangoli-images/download (14).jpg",
    },
    {
      id: 4,
      title: 'Peacock Lotus Rangoli',
      price: '449',
      status: 'Rejected',
      image: '/rangoli-images/rangoli 🦚 🪷.jpg',
    },
    {
      id: 5,
      title: 'Flower Rangoli',
      price: '199',
      status: 'Approved',
      image: '/rangoli-images/flower 🌺 wale rangoli.jpg',
    },
    {
      id: 6,
      title: 'Annapurna Jayanti Design',
      price: '349',
      status: 'Pending',
      image: '/rangoli-images/Annapurna Jayanti Rangoli Design Images (Kolam Ideas).jpg',
    },
    {
      id: 7,
      title: 'Aadi Matham Lotus',
      price: '599',
      status: 'Approved',
      image: '/rangoli-images/Aadi matham spl traditional rangoli _ Lotus flower rangoli _ big kolangal @saisparkrangolies.jpg',
    },
    {
      id: 8,
      title: 'Best Diwali Rangoli',
      price: '279',
      status: 'Approved',
      image: '/rangoli-images/Best 25+ Rangoli For Diwali » Mixing Images.jpg',
    },
    {
      id: 9,
      title: 'Just Not Rangoli',
      price: '329',
      status: 'Pending',
      image: '/rangoli-images/Justnotrangoli.jpg',
    },
  ];

  // Copyright designs data with proper structure
  const copyrightDesigns = [
    {
      id: 1,
      title: 'Easy Rangoli for Beginners',
      date: 'March 15, 2024',
      copyrightId: 'CK-2024-0315-001',
      status: 'Approved',
      image: '/rangoli-images/15 Easy Rangoli Designs for Beginners.jpg',
    },
    {
      id: 2,
      title: 'Simple Dhanurmasam Muggulu',
      date: 'March 12, 2024',
      copyrightId: 'CK-2024-0312-002',
      status: 'Pending',
      image: '/rangoli-images/Simple rangoli designs _ Dhanurmasam Muggulu _ Easy Pongal Padi Kolam _ Easy Rangoli_ Geethala Muggu (1).jpg',
    },
    {
      id: 3,
      title: 'Heritage Muggu Design',
      date: 'March 10, 2024',
      copyrightId: 'CK-2024-0310-003',
      status: 'Approved',
      image: '/rangoli-images/download (9).jpg',
    },
    {
      id: 4,
      title: 'Peacock Rangoli Art',
      date: 'March 8, 2024',
      copyrightId: 'CK-2024-0308-004',
      status: 'Rejected',
      image: '/rangoli-images/download (10).jpg',
    },
    {
      id: 5,
      title: 'Royal Mandana Pattern',
      date: 'March 5, 2024',
      copyrightId: 'CK-2024-0305-005',
      status: 'Approved',
      image: '/rangoli-images/download (11).jpg',
    },
    {
      id: 6,
      title: 'Modern Fusion Kolam',
      date: 'March 3, 2024',
      copyrightId: 'CK-2024-0303-006',
      status: 'Pending',
      image: '/rangoli-images/download (12).jpg',
    },
    {
      id: 7,
      title: 'Festival Special Design',
      date: 'February 28, 2024',
      copyrightId: 'CK-2024-0228-007',
      status: 'Approved',
      image: '/rangoli-images/download (14).jpg',
    },
    {
      id: 8,
      title: 'Traditional Kolam Art',
      date: 'February 25, 2024',
      copyrightId: 'CK-2024-0225-008',
      status: 'Approved',
      image: '/rangoli-images/download (15).jpg',
    },
    {
      id: 9,
      title: 'Geometric Rangoli',
      date: 'February 20, 2024',
      copyrightId: 'CK-2024-0220-009',
      status: 'Pending',
      image: '/rangoli-images/download (16).jpg',
    },
  ];

  // Copyright stats
  const copyrightStats = {
    totalCopyrighted: '9',
    approved: '5',
    pending: '3',
    rejected: '1',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'library':
        return (
          <ArtworkGrid artworks={artworks} />
        );
      case 'monetisation':
        return (
          <div>
            <StatsCards stats={stats} />
            <MonetizedDesignsGrid designs={monetizedDesigns} isOwnProfile={isOwnProfile} />
          </div>
        );
      case 'copyright':
        return (
          <div>
            <CopyrightStatsCards stats={copyrightStats} />
            <CopyrightDesignsGrid designs={copyrightDesigns} isOwnProfile={isOwnProfile} />
          </div>
        );
      default:
        return <ArtworkGrid artworks={artworks} />;
    }
  };

  return (
    <>
      <main className="max-w-[1400px] mx-auto px-6 py-6 pb-24">
        <ProfileHeader 
          profile={profileData} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOwnProfile={isOwnProfile}
          onEditProfile={handleEditProfile}
        />
        {renderTabContent()}
      </main>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profileData}
        onSave={handleSaveProfile}
      />
    </>
  );
};

export default ProfilePage;