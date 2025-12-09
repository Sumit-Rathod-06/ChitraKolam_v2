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
    name: 'Priya Sharma',
    bio: 'Traditional Kolam Artist | Preserving Heritage Through Art',
    occupation: 'Traditional Kolam Artist',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    posts: '248',
    followers: '12.4K',
    following: '842'
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
    { id: 1, img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop', title: 'Colorful Mandala' },
    { id: 2, img: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=400&fit=crop', title: 'Peacock Rangoli' },
    { id: 3, img: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=400&fit=crop', title: 'Floral Pattern' },
    { id: 4, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', title: 'Traditional Design' },
    { id: 5, img: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=400&fit=crop', title: 'Lotus Kolam' },
    { id: 6, img: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400&h=400&fit=crop', title: 'Diya Rangoli' },
    { id: 7, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', title: 'Geometric Pattern' },
    { id: 8, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', title: 'Festival Kolam' },
    { id: 9, img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop', title: 'Pongal Design' },
    { id: 10, img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=400&fit=crop', title: 'Mandala Art' },
    { id: 11, img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=400&fit=crop', title: 'Symmetrical Rangoli' },
    { id: 12, img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=400&fit=crop', title: 'Traditional Kolam' }
  ];

  // Monetization stats
  const stats = {
    totalEarnings: '24,567',
    thisMonth: '3,420',
    designsSold: '187',
  };

  // Monetized designs data
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

  // Copyright designs data with proper structure
  const copyrightDesigns = [
    {
      id: 1,
      title: 'Sacred Lotus Kolam',
      date: 'March 15, 2024',
      copyrightId: 'CK-2024-0315-001',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Festival Rangoli',
      date: 'March 12, 2024',
      copyrightId: 'CK-2024-0312-002',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Heritage Muggu',
      date: 'March 10, 2024',
      copyrightId: 'CK-2024-0310-003',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Peacock Alpana',
      date: 'March 8, 2024',
      copyrightId: 'CK-2024-0308-004',
      status: 'Rejected',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Royal Mandana',
      date: 'March 5, 2024',
      copyrightId: 'CK-2024-0305-005',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Modern Fusion',
      date: 'March 3, 2024',
      copyrightId: 'CK-2024-0303-006',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=400&h=400&fit=crop',
    },
  ];

  // Copyright stats
  const copyrightStats = {
    totalCopyrighted: '24',
    approved: '18',
    pending: '4',
    rejected: '2',
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