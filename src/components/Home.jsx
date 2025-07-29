import React, { useState } from "react";
import HeroSection from "./HeroSection";
import HotelList from "./HotelList";
import { hotels } from "../data/hotels";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    // setCurrentView("hotel-details");
    navigate(`/hotels/${hotel.id}`);
  };
  return (
    <>
      <HeroSection />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Hotels
          </h2>
          <p className="text-gray-600 mb-8">
            Discover our most loved accommodations
          </p>
        </div>
        <HotelList
          hotels={hotels.slice(0, 6)}
          onHotelSelect={handleHotelSelect}
        />
      </div>
    </>
  );
};

export default Home;
