import React from "react";
import { Users, Maximize, Wifi, Coffee } from "lucide-react";

const amenityIcons = {
  WiFi: Wifi,
  "Mini Bar": Coffee,
  "King Bed": () => <div className="w-4 h-4">🛏️</div>,
  "Queen Bed": () => <div className="w-4 h-4">🛏️</div>,
  "City View": () => <div className="w-4 h-4">🏙️</div>,
  "Ocean View": () => <div className="w-4 h-4">🌊</div>,
  "Mountain View": () => <div className="w-4 h-4">🏔️</div>,
  Balcony: () => <div className="w-4 h-4">🏞️</div>,
  "Living Area": () => <div className="w-4 h-4">🛋️</div>,
  Fireplace: () => <div className="w-4 h-4">🔥</div>,
};

const RoomCard = ({ room, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={room.image}
          alt={room.type}
          className="w-full h-48 object-cover"
        />
        {room.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Save ${room.originalPrice - room.price}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{room.type}</h3>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>Up to {room.maxGuests} guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="h-4 w-4" />
            <span>{room.size}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.map((amenity, index) => {
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
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            {room.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${room.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              ${room.price}
            </span>
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          <button
            onClick={onSelect}
            disabled={!room.available}
            className={`px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              room.available
                ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 shadow-md"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {room.available ? "Select Room" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
