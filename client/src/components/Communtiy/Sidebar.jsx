import React from 'react';
import { Home, Bell, Star, Users, Upload, Bookmark, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="col-span-3">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 rounded-full flex items-center justify-center text-2xl" style={{ backgroundImage: 'linear-gradient(to bottom right, #fb923c, #dc2626)' }}>
            👩‍🎨
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Priya Sharma</h3>
            <p className="text-sm text-gray-500">@priyakolam</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">127</div>
            <div className="text-sm text-gray-500">Uploads</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">2.4K</div>
            <div className="text-sm text-gray-500">Followers</div>
          </div>
        </div>
      </div>

      <nav className="bg-white rounded-xl shadow-sm p-4">
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white mb-2" style={{ backgroundColor: '#dc2626' }}>
          <Home size={20} />
          <span className="font-medium">Home Feed</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 mb-2">
          <Bell size={20} />
          <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 mb-2">
          <Star size={20} />
          <span>Festive Collections</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 mb-2">
          <Users size={20} />
          <span>Groups</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 mb-2">
          <Upload size={20} />
          <span>My Uploads</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 mb-2">
          <Bookmark size={20} />
          <span>Saved Kolams</span>
        </a>
        <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;