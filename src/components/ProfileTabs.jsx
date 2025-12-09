import { useState } from 'react';

const ProfileTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'library', label: 'Library' },
    { id: 'monetisation', label: 'Monetisation Designs' },
    { id: 'copyright', label: 'Copyright Designs' },
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <div className="flex justify-center space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;
