import React from "react";

const StayInspired = () => {
  return (
    <div className="bg-gradient-to-r from-red-800 to-yellow-600 text-white py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-2">Stay Inspired</h2>
      <p className="mb-6">
        Get weekly rangoli patterns and cultural stories delivered to your inbox
      </p>
      <div className="flex justify-center gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 py-2 rounded-full text-black w-72"
        />
        <button className="bg-white text-red-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">
          Subscribe
        </button>
      </div>
      <p className="text-sm">
        Join 25,000+ art enthusiasts. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default StayInspired;