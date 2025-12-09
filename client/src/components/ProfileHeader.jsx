import React from 'react';
import { MapPin } from 'lucide-react';

const ProfileHeader = ({ profile, activeTab, onTabChange, isOwnProfile = true, onEditProfile }) => {
  const tabs = [
    { id: 'library', label: 'Library' },
    { id: 'monetisation', label: 'Monetized Designs' },
    { id: 'copyright', label: 'Copyright Designs' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6">
      {/* Profile Info Section */}
      <div className="p-6 pb-4">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 ring-white shadow-lg">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Bio */}
          <h2 className="text-lg font-bold text-gray-900 mb-0.5">{profile.name}</h2>
          <p className="text-gray-500 text-sm text-center mb-1">{profile.bio}</p>
          <div className="flex items-center text-gray-400 text-xs mb-4">
            <MapPin size={12} className="mr-1" />
            <span>{profile.location}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="text-center px-4">
              <div className="text-lg font-bold text-gray-900">{profile.posts}</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center px-4">
              <div className="text-lg font-bold text-gray-900">{profile.followers}</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center px-4">
              <div className="text-lg font-bold text-gray-900">{profile.following}</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>

          {/* Action Button - Conditional based on isOwnProfile */}
          <div className="flex items-center justify-center">
            {isOwnProfile ? (
              /* Edit Profile Button for own profile */
              <button 
                onClick={onEditProfile}
                className="px-6 py-1.5 border border-gray-300 rounded-full text-gray-600 text-sm font-medium hover:bg-gray-50 transition"
              >
                Edit Profile
              </button>
            ) : (
              /* Follow Button for other profiles */
              <button 
                className="px-5 py-1.5 text-white rounded-full text-sm font-medium transition" 
                style={{ backgroundColor: '#DC2626' }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#B91C1C'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#DC2626'}
              >
                + Follow
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-t border-gray-100">
        <div className="flex justify-center space-x-8 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;   