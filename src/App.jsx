import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";
import Footer from "./components/Footer";
import { hotels } from "./data/hotels";

function App() {
  const [currentView, setCurrentView] = useState("home"); // 'home' | 'search' | 'hotel-details' | 'booking-confirmed'
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (filters) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      let results = [...hotels];

      if (filters.location) {
        results = results.filter((hotel) =>
          hotel.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }

      setFilteredHotels(results);
      setCurrentView("search");
      setShowSearchBar(false);
      setIsLoading(false);
    }, 1500);
  };

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentView("hotel-details");
  };

  const handleBackToSearch = () => {
    setCurrentView("search");
    setSelectedHotel(null);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedHotel(null);
    setFilteredHotels(hotels);
  };

  const handleBookingComplete = (roomId) => {
    setCurrentView("booking-confirmed");
    // Here you would typically handle the booking logic
    setTimeout(() => {
      handleBackToHome();
    }, 3000);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchToggle={toggleSearchBar} />

      <SearchBar isVisible={showSearchBar} onSearch={handleSearch} />

      {currentView === "home" && (
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
      )}

      {currentView === "search" && (
        <div className="min-h-screen">
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <button
                onClick={handleBackToHome}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                ← Back to Home
              </button>
            </div>
          </div>
          <HotelList
            hotels={filteredHotels}
            onHotelSelect={handleHotelSelect}
            loading={isLoading}
          />
        </div>
      )}

      {currentView === "hotel-details" && selectedHotel && (
        <HotelDetails
          hotel={selectedHotel}
          onBack={handleBackToSearch}
          onBooking={handleBookingComplete}
        />
      )}

      {currentView === "booking-confirmed" && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center animate-in fade-in-50 zoom-in-95 duration-1000">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Thank you for your booking!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              You'll receive a confirmation email shortly.
            </p>
            <div className="animate-pulse text-blue-600">
              Redirecting to home...
            </div>
          </div>
        </div>
      )}

      {(currentView === "home" || currentView === "search") && <Footer />}
    </div>
  );
}

export default App;
