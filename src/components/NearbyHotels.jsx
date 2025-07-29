import { StarIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function NearbyHotels({
  hotels,
  loading,
  error,
  onHotelSelect,
  selectedHotel,
}) {
  if (loading) {
    return (
      <div className="p-4 space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">
        <p>Error loading hotels: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-h-80 overflow-y-auto">
      {hotels.map((hotel, index) => (
        <div
          key={hotel.place_id || index}
          className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
            selectedHotel?.place_id === hotel.place_id
              ? "bg-blue-50 border-blue-200"
              : ""
          }`}
          onClick={() => onHotelSelect(hotel)}
        >
          <h4 className="font-medium text-sm mb-1 line-clamp-1">
            {hotel.name}
          </h4>

          <div className="flex items-center gap-2 mb-1">
            {hotel.rating && (
              <div className="flex items-center">
                <StarIcon className="h-3 w-3 text-yellow-500" />
                <span className="text-xs text-gray-600 ml-1">
                  {hotel.rating}
                </span>
              </div>
            )}
            {hotel.price_level && (
              <span className="text-xs text-gray-600">
                {"$".repeat(hotel.price_level)}
              </span>
            )}
          </div>

          <p className="text-xs text-gray-500 mb-2 line-clamp-1">
            {hotel.vicinity}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-xs text-primary font-medium">
              View Details
            </span>
            <MapPinIcon className="h-3 w-3 text-gray-400" />
          </div>
        </div>
      ))}

      {hotels.length === 0 && !loading && (
        <div className="p-4 text-center text-gray-500">
          <p>No hotels found in this area</p>
        </div>
      )}
    </div>
  );
}
