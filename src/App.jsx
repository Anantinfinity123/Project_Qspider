import React, { useState } from "react";
// import HotelList from "./components/HotelList";
import HotelDetails from "./components/HotelDetails";
import Footer from "./components/Footer";
import { hotels } from "./data/hotels";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import DestinationPage from "./pages/DestinationPage";
import MapPage from "./components/MapPage";
import HotelDetailsWrapper from "./components/HotelDetailsWrapper";
import DealsPage from "./pages/DealsPage";

function App() {
  const [currentView, setCurrentView] = useState("home"); // 'home' | 'search' | 'hotel-details' | 'booking-confirmed'
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* {currentView === "home" && (
        
      )} */}

      {/* {currentView === "search" && (
        
      )} */}

      {currentView === "hotel-details" && selectedHotel && (
        <HotelDetails
          hotel={selectedHotel}
          onBack={handleBackToSearch}
          onBooking={handleBookingComplete}
        />
      )}

      {currentView === "booking-confirmed" && (
        <div className="mt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
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
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hotels" element={<HotelListPage />} /> */}
          {/* <Route path="/hotels/:id" element={<HotelDetails />} /> */}
          {/* <Route
            path="/hotels/:id"
            element={
              // <HotelDetailsWrapper
              //   onBack={handleBackToSearch}
              //   onBooking={handleBookingComplete}
              // />
              <HotelDetails
                hotel={selectedHotel}
                onBack={handleBackToSearch}
                onBooking={handleBookingComplete}
              />
            } 
          /> */}
          <Route
            path="/hotels/:id"
            element={
              <HotelDetailsWrapper
                onBack={handleBackToSearch}
                onBooking={handleBookingComplete}
              />
            }
          />

          {/* <Route path="/booking/:id" element={<BookingPage />} /> */}
          <Route path="/deals" element={<DealsPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
