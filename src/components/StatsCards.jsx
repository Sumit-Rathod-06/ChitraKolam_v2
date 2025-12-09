import React from 'react';
import { IndianRupee, Calendar, ShoppingCart } from 'lucide-react';

const StatsCards = ({ stats }) => {
  const cards = [
    {
      id: 'earnings',
      label: 'Total Earnings',
      value: stats.totalEarnings,
      icon: IndianRupee,
      prefix: '₹',
    },
    {
      id: 'monthly',
      label: 'This Month',
      value: stats.thisMonth,
      icon: Calendar,
      prefix: '₹',
    },
    {
      id: 'sold',
      label: 'Designs Sold',
      value: stats.designsSold,
      icon: ShoppingCart,
      prefix: '',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm mb-1">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900">
                {card.prefix}{card.value}
              </p>
            </div>
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
              <Icon size={20} className="text-gray-600" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
