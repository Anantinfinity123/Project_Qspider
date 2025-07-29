import { useEffect, useState } from "react";
import { fetchFeaturedDeals } from "../services/dealService";
import { Deal } from "../models/Deals";
import { Link } from "react-router-dom";

export default function FeaturedDeals() {
  const [featuredDeals, setFeaturedDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedDeals = async () => {
      try {
        const deals = await fetchFeaturedDeals();
        const dealModels = deals.map((deal) => new Deal(deal));
        setFeaturedDeals(dealModels);
      } catch (error) {
        console.error("Error loading featured deals:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedDeals();
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mb-6"></div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-300 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        🔥 Featured Deals
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredDeals.map((deal, index) => (
          <div
            key={deal.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {/* Rank Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                #{index + 1} Best Deal
              </span>
            </div>

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={deal.image}
                alt={deal.hotelName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Discount Badge */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold">
                  {deal.discountPercentage}% OFF
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {deal.hotelName}
              </h3>
              <p className="text-gray-600 mb-3">📍 {deal.shortLocation}</p>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${deal.discountedPrice}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${deal.originalPrice}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    Save ${deal.savings}
                  </p>
                </div>
              </div>

              <Link
                to={`/deals/${deal.id}`}
                className="block w-full bg-sky-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Deal
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
