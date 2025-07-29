import { useState } from "react";

export default function DealFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    dealType: "",
    maxPrice: "",
    minRating: "",
    city: "",
  });

  const dealTypes = [
    "Early Bird Special",
    "Weekend Special",
    "Seasonal Offer",
    "Heritage Package",
    "Flash Sale",
    "Nature Lover's Deal",
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      dealType: "",
      maxPrice: "",
      minRating: "",
      city: "",
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-primary hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {/* Deal Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deal Type
          </label>
          <select
            value={filters.dealType}
            onChange={(e) => handleFilterChange("dealType", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">All Types</option>
            {dealTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Price per Night
          </label>
          <select
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Any Price</option>
            <option value="200">Under $200</option>
            <option value="300">Under $300</option>
            <option value="400">Under $400</option>
            <option value="500">Under $500</option>
          </select>
        </div>

        {/* Minimum Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => handleFilterChange("minRating", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
            <option value="3.0">3.0+ Stars</option>
          </select>
        </div>

        {/* City Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            placeholder="Search by city..."
            value={filters.city}
            onChange={(e) => handleFilterChange("city", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Quick Filters */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Quick Filters
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">
                Free Cancellation
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">
                Fully Refundable
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">Expiring Soon</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
