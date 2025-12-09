import React from 'react';
import { Trophy } from 'lucide-react';

const RightSidebar = ({ posts }) => {
  return (
    <aside className="col-span-3">
      <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <Trophy size={28} />
            <h3 className="font-bold text-lg">Rangoli Competition</h3>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            We are organizing an exciting rangoli competition where artists from across the community can showcase their beautiful creations. Display your artistic skills and win amazing prizes!
          </p>
          <p className="text-xs opacity-90">
            🎨 <strong>Categories:</strong> Festival, Geometric, Traditional & Modern
          </p>
          <p className="text-xs opacity-90 mt-2">
            📅 <strong>Participate now:</strong> Upload your best rangoli designs to compete
          </p>
          <p className="text-xs opacity-90 mt-2">
            🏆 <strong>Prizes:</strong> Recognition, Featured posts & Monthly badges
          </p>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;