import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const hotelCount = destination.nearbyHotels?.length || 0;

  const goToMap = () => {
    navigate("/map", { state: { destination } }); // pass destination object in state:contentReference[oaicite:9]{index=9}
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Country Badge */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
            {destination.country}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-primary/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            {destination.category}
          </span>
        </div>

        {/* Hotel Count Badge */}
        {hotelCount > 0 && (
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-secondary/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {hotelCount} Hotels
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>

        <p className="mb-4 text-gray-600 line-clamp-2">
          {destination.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-800">
            Top Attractions:
          </h4>
          <div className="flex flex-wrap gap-1">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarIcon className="h-4 w-4" />
            <span>{destination.bestTime}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <UsersIcon className="h-4 w-4" />
            <span>{destination.averageStay}</span>
          </div>
        </div>

        {/* Popular With */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {destination.popularWith.slice(0, 2).map((type, index) => (
              <span
                key={index}
                className="rounded-full bg-secondary/10 px-2 py-1 text-xs text-secondary font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/hotels?destination=${encodeURIComponent(
              destination.name
            )}&lat=${destination.location.lat}&lng=${destination.location.lng}`}
            className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            Find Hotels ({hotelCount})
          </Link>
          <button
            onClick={goToMap}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <MapPinIcon className="h-4 w-4 inline mr-1" />
            Explore Map
          </button>
        </div>
      </div>
    </div>
  );
}
