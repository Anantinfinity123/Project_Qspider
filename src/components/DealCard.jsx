import { Link } from "react-router-dom";
import { Deal } from "../models/Deals";

export default function DealCard({ deal }) {
  if (!(deal instanceof Deal)) {
    deal = new Deal(deal);
  }

  const getDealTypeColor = (dealType) => {
    const colors = {
      "Early Bird Special": "bg-green-100 text-green-800",
      "Weekend Special": "bg-blue-100 text-blue-800",
      "Seasonal Offer": "bg-orange-100 text-orange-800",
      "Heritage Package": "bg-purple-100 text-purple-800",
      "Flash Sale": "bg-red-100 text-red-800",
      "Nature Lover's Deal": "bg-emerald-100 text-emerald-800",
    };
    return colors[dealType] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Deal Image */}
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.hotelName}
          className="w-full h-48 object-cover"
        />

        {/* Discount Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            {deal.discountPercentage}% OFF
          </span>
        </div>

        {/* Deal Type Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getDealTypeColor(
              deal.dealType
            )}`}
          >
            {deal.dealType}
          </span>
        </div>

        {/* Expiring Soon Badge */}
        {deal.isExpiringSoon && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium animate-pulse">
              ⏰ Expires Soon
            </span>
          </div>
        )}
      </div>

      {/* Deal Content */}
      <div className="p-6">
        {/* Hotel Name & Location */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {deal.hotelName}
        </h3>
        <p className="text-gray-600 mb-2">📍 {deal.shortLocation}</p>

        {/* Deal Title */}
        <h4 className="text-lg font-semibold text-primary mb-3">
          {deal.title}
        </h4>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 mr-1">{deal.ratingStars}</span>
          <span className="text-sm text-gray-600">
            {deal.rating} ({deal.reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price Information */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ${deal.discountedPrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${deal.originalPrice}
            </span>
          </div>
          <p className="text-sm text-gray-600">per night</p>
          <p className="text-sm font-medium text-green-600">
            Save ${deal.savings}
          </p>
        </div>

        {/* Room Type */}
        <div className="mb-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Room:</span> {deal.roomType}
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Guests:</span> Up to {deal.maxGuests}
          </p>
        </div>

        {/* Key Inclusions */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-900 mb-1">Includes:</p>
          <ul className="text-xs text-gray-600">
            {deal.inclusions.slice(0, 3).map((inclusion, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-1">✓</span>
                {inclusion}
              </li>
            ))}
            {deal.inclusions.length > 3 && (
              <li className="text-primary">
                +{deal.inclusions.length - 3} more
              </li>
            )}
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="mb-4">
          {deal.freeCancellation ? (
            <p className="text-xs text-green-600 flex items-center">
              <span className="mr-1">✓</span>
              Free cancellation
            </p>
          ) : (
            <p className="text-xs text-green-600 flex items-center">
              <span className="mr-1">✓</span>
              Deduct 30% for cancellation
            </p>
          )}
          {deal.isRefundable ? (
            <p className="text-xs text-green-600 flex items-center">
              <span className="mr-1">✓</span>
              Fully refundable
            </p>
          ) : (
            <p className="text-xs text-green-600 flex items-center">
              <span className="mr-1">✓</span>
              No refundable
            </p>
          )}
        </div>

        {/* Valid Period */}
        <div className="mb-4 text-xs text-gray-500">
          Valid: {deal.formattedValidPeriod}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/hotels/${deal.hotelId}`}
            className="flex-1 bg-sky-800 text-white text-center py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/booking/${deal.hotelId}?dealId=${deal.id}`}
            className="flex-1 bg-zinc-700 text-white text-center py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors items-center justify-content-center"
          >
            Book Room
          </Link>
        </div>
      </div>
    </div>
  );
}
