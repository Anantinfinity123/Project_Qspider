import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Coffee,
  Heart,
  Share2,
} from "lucide-react";
import RoomCard from "./RoomCard";
import BookingForm from "./BookingForm";

const amenityIcons = {
  "Free WiFi": Wifi,
  Pool: Waves,
  Restaurant: Utensils,
  Parking: Car,
  Gym: Dumbbell,
  Spa: () => <div className="w-5 h-5">🧘</div>,
  "Room Service": Coffee,
};

const HotelDetails = ({ hotel, onBack, onBooking }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const handleRoomSelect = (roomId) => {
    setSelectedRoomId(roomId);
    setShowBookingForm(true);
  };

  if (showBookingForm && selectedRoomId) {
    const selectedRoom = hotel.rooms.find((room) => room.id === selectedRoomId);
    if (selectedRoom) {
      return (
        <BookingForm
          hotel={hotel}
          room={selectedRoom}
          onBack={() => setShowBookingForm(false)}
          onConfirm={() => {
            onBooking(selectedRoomId);
            setShowBookingForm(false);
          }}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-in fade-in-50 duration-500">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to results</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {hotel.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-gray-500">
                    ({hotel.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{hotel.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Heart className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <img
                    src={hotel.images[selectedImageIndex]}
                    alt={hotel.name}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
                  {hotel.images.slice(0, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${hotel.name} ${index + 1}`}
                      className={`w-full h-20 md:h-24 object-cover rounded-lg cursor-pointer transition-all ${
                        selectedImageIndex === index
                          ? "ring-2 ring-blue-500"
                          : "hover:opacity-80"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Hotel
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {hotel.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg border"
                    >
                      {IconComponent && <IconComponent />}
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rooms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Available Rooms
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hotel.rooms.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    onSelect={() => handleRoomSelect(room.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {hotel.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${hotel.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-gray-900">
                    ${hotel.price}
                  </span>
                </div>
                <span className="text-gray-600">per night</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-semibold">3:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Check-out</span>
                  <span className="font-semibold">11:00 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Free cancellation</span>
                  <span className="font-semibold text-green-600">
                    Available
                  </span>
                </div>
              </div>

              <button
                onClick={() =>
                  hotel.rooms.length > 0 && handleRoomSelect(hotel.rooms[0].id)
                }
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md"
              >
                Book Now
              </button>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">
                  Free cancellation until 24 hours before
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
