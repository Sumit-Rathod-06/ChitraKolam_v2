import React from 'react';
import { LayoutDashboard, Image, DollarSign, Receipt, Shield, Settings } from 'lucide-react';

const Sidebar = ({ activeItem, onItemChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'designs', label: 'Your Designs', icon: Image },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'transactions', label: 'Transactions', icon: Receipt },
    { id: 'copyright', label: 'Copyright Submissions', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-56 bg-white rounded-xl shadow-sm p-4 h-fit sticky top-20">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemChange(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-gray-900' : 'text-gray-500'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
