import React from 'react';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

const CopyrightStatsCards = ({ stats }) => {
  const cards = [
    {
      id: 'total',
      label: 'Total Copyrighted',
      value: stats.totalCopyrighted,
      icon: FileText,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'approved',
      label: 'Approved',
      value: stats.approved,
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      id: 'pending',
      label: 'Pending Review',
      value: stats.pending,
      icon: Clock,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      id: 'rejected',
      label: 'Rejected',
      value: stats.rejected,
      icon: XCircle,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center space-x-3"
          >
            <div className={`w-10 h-10 ${card.bgColor} rounded-lg flex items-center justify-center`}>
              <Icon size={20} className={card.iconColor} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-xs text-gray-500">{card.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CopyrightStatsCards;
