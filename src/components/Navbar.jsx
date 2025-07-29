import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = (filters) => {
    setIsLoading(!isLoading);

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

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <>
      <Header onSearchToggle={toggleSearchBar} />

      <SearchBar isVisible={showSearchBar} onSearch={handleSearch} />
    </>
  );
};

export default Navbar;
