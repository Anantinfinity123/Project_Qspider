import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "../styles/leaflet.css";

// Fix for default markers in React Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icons
const createCustomIcon = (color, size = [30, 30]) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: `<div style="
      background-color: ${color};
      width: ${size[0]}px;
      height: ${size[1]}px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1] / 2],
  });
};

const destinationIcon = createCustomIcon("#EF4444", [40, 40]);
const hotelIcon = createCustomIcon("#3B82F6", [25, 25]);

// Component to handle map updates
function MapUpdater({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);

  return null;
}

export default function LeafletMapComponent({
  destination,
  className = "",
  showHotels = true,
  onHotelSelect,
}) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [mapCenter, setMapCenter] = useState(destination.location);
  const [mapZoom, setMapZoom] = useState(13);

  const hotels = destination.nearbyHotels || [];

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    if (onHotelSelect) {
      onHotelSelect(hotel);
    }
  };

  const handleMapClick = () => {
    setSelectedHotel(null);
  };

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[mapCenter.lat, mapCenter.lng]}
        zoom={mapZoom}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg"
        style={{ minHeight: "400px" }}
      >
        <MapUpdater center={[mapCenter.lat, mapCenter.lng]} zoom={mapZoom} />

        {/* OpenStreetMap Tile Layer - Completely Free */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Destination Marker */}
        <Marker
          position={[destination.location.lat, destination.location.lng]}
          icon={destinationIcon}
        >
          <Popup className="custom-popup">
            <div className="p-3 min-w-[200px]">
              <h3 className="font-bold text-lg mb-2">{destination.name}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {destination.description}
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Best Time:</strong> {destination.bestTime}
                </p>
                <p>
                  <strong>Average Stay:</strong> {destination.averageStay}
                </p>
                <p>
                  <strong>Category:</strong> {destination.category}
                </p>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Hotel Markers */}
        {showHotels &&
          hotels.map((hotel) => (
            <Marker
              key={hotel.id}
              position={[hotel.location.lat, hotel.location.lng]}
              icon={hotelIcon}
              eventHandlers={{
                click: () => handleHotelClick(hotel),
              }}
            >
              <Popup className="custom-popup">
                <div className="p-3 min-w-[250px]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h4 className="font-bold text-lg mb-2">{hotel.name}</h4>

                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm font-medium">
                        {hotel.rating}
                      </span>
                    </div>
                    <span className="ml-3 text-lg font-bold text-primary">
                      ${hotel.price}/night
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Amenities:</p>
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleHotelClick(hotel)}
                      className="flex-1 bg-primary text-white px-3 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() =>
                        window.open(`/booking/${hotel.id}`, "_blank")
                      }
                      className="px-3 py-2 border border-primary text-primary rounded-md text-sm hover:bg-primary/10 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Hotels Panel */}
      {showHotels && hotels.length > 0 && (
        <div className="absolute top-4 right-4 w-80 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden z-[1000]">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-semibold text-lg">
              Hotels near {destination.name}
            </h3>
            <p className="text-sm text-gray-600">
              {hotels.length} hotels found
            </p>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className={`p-3 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedHotel?.id === hotel.id
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
                onClick={() => handleHotelClick(hotel)}
              >
                <div className="flex gap-3">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{hotel.name}</h4>

                    <div className="flex items-center mb-1">
                      <span className="text-yellow-500 text-xs">★</span>
                      <span className="text-xs text-gray-600 ml-1">
                        {hotel.rating}
                      </span>
                      <span className="text-sm font-semibold text-primary ml-2">
                        ${hotel.price}/night
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.slice(0, 2).map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-1 py-0.5 rounded text-xs"
                        >
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{hotel.amenities.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Hotel Details Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{selectedHotel.name}</h2>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedHotel.image}
                alt={selectedHotel.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 font-medium">
                      {selectedHotel.rating}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ${selectedHotel.price}/night
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedHotel.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() =>
                    window.open(`/booking/${selectedHotel.id}`, "_blank")
                  }
                  className="flex-1 bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </button>
                <button
                  onClick={() => setSelectedHotel(null)}
                  className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
