import { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import LeafletMapComponent from "../components/LeafletMapComponent";
import {
  MagnifyingGlassIcon,
  MapIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

export default function DestinationPage() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'map'
  const [selectedHotel, setSelectedHotel] = useState(null);

  const categories = ["All", ...new Set(destinations.map((d) => d.category))];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || destination.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleExploreMap = (destination) => {
    setSelectedDestination(destination);
    setViewMode("map");
  };

  const handleBackToGrid = () => {
    setViewMode("grid");
    setSelectedDestination(null);
    setSelectedHotel(null);
  };

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div className="mt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {viewMode === "map" && selectedDestination
                  ? `Explore ${selectedDestination.name}`
                  : "Discover Amazing Destinations"}
              </h1>
              <p className="text-gray-600 mt-1">
                {viewMode === "map"
                  ? "Interactive map with nearby hotels and attractions"
                  : "Find your next adventure from our curated collection of world destinations"}
              </p>
              {selectedHotel && (
                <p className="text-sm text-primary mt-1">
                  Selected: {selectedHotel.name} - ${selectedHotel.price}/night
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
                title="Grid View"
              >
                <ViewColumnsIcon className="h-5 w-5" />
              </button>
              {selectedDestination && (
                <button
                  onClick={() => setViewMode("map")}
                  className={`p-2 rounded-lg border transition-colors ${
                    viewMode === "map"
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                  title="Map View"
                >
                  <MapIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <>
          {/* Search and Filters */}
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, countries, or experiences..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-48">
                <select
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredDestinations.length} destination
                {filteredDestinations.length !== 1 ? "s" : ""} found
                {searchTerm && ` for "${searchTerm}"`}
                {categoryFilter !== "All" && ` in ${categoryFilter}`}
              </p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  onExploreMap={handleExploreMap}
                />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No destinations found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="h-[calc(100vh-140px)]">
          {selectedDestination && (
            <>
              <div className="max-w-7xl mx-auto px-4 py-4">
                <button
                  onClick={handleBackToGrid}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  ← Back to destinations
                </button>
              </div>
              <LeafletMapComponent
                destination={selectedDestination}
                className="h-[calc(100vh-200px)] mx-4 mb-4"
                showHotels={true}
                onHotelSelect={handleHotelSelect}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
