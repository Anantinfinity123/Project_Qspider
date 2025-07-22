import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ hotels, onHotelSelect, loading = false }) => {
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300" />
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded mb-2" />
                <div className="h-4 bg-gray-300 rounded mb-3" />
                <div className="h-16 bg-gray-300 rounded mb-4" />
                <div className="flex justify-between items-center">
                  <div className="h-8 w-20 bg-gray-300 rounded" />
                  <div className="h-10 w-24 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (hotels.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-12">
          <div className="text-6xl mb-6">🏨</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No hotels found
          </h2>
          <p className="text-gray-600 mb-8">
            Try adjusting your search criteria or explore different
            destinations.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md">
            Explore All Hotels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {hotels.length} {hotels.length === 1 ? "Hotel" : "Hotels"} Found
        </h2>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Sort by: Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
            <option>Distance</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={hotel.id}
            className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <HotelCard hotel={hotel} onSelect={onHotelSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
