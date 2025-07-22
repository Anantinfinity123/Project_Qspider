import React from "react";
import { Star, MapPin, Wifi, Car, Utensils, Heart } from "lucide-react";

const amenityIcons = {
  "Free WiFi": Wifi,
  Pool: () => <div className="w-4 h-4">🏊</div>,
  Restaurant: Utensils,
  Parking: Car,
};

const HotelCard = ({ hotel, onSelect }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
      onClick={() => onSelect(hotel)}
    >
      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {hotel.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Save ${hotel.originalPrice - hotel.price}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {hotel.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {hotel.rating}
            </span>
            <span className="text-xs text-gray-500">({hotel.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{hotel.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {hotel.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 4).map((amenity, index) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <div
                key={index}
                className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
              >
                {IconComponent && <IconComponent />}
                <span>{amenity}</span>
              </div>
            );
          })}
          {hotel.amenities.length > 4 && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              +{hotel.amenities.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            {hotel.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${hotel.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              ${hotel.price}
            </span>
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
