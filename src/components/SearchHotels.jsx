import React from "react";

const SearchHotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [isLoading, setIsLoading] = useState(false);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentView("hotel-details");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedHotel(null);
    setFilteredHotels(hotels);
  };

  return (
    <>
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
    </>
  );
};

export default SearchHotels;
