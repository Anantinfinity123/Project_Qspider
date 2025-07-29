import { useEffect, useState } from "react";
import { fetchDeals } from "../services/dealService";
import { Deal } from "../models/Deals";
import DealCard from "../components/DealCard";
import DealFilters from "../components/DealFilters";
import FeaturedDeals from "../components/FeaturedDeals";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DealsPage() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const loadDeals = async () => {
      try {
        setLoading(true);
        const response = await fetchDeals(filters);
        const dealModels = response.deals.map((deal) => new Deal(deal));
        setDeals(dealModels);
      } catch (err) {
        setError("Failed to load deals. Please try again.");
        console.error("Error loading deals:", err);
      } finally {
        setLoading(false);
      }
    };

    loadDeals();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Hotel Deals
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing discounts on luxury hotels worldwide. Limited time
            offers with savings up to 50% off regular rates.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg font-semibold">🔥 Flash Sale Active</p>
            <p className="text-sm">Book now and save on your next getaway!</p>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80">
            <DealFilters onFilterChange={handleFilterChange} />
          </aside>

          {/* Deals Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Deals ({deals.length})
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="discount">Highest Discount</option>
                <option value="price">Lowest Price</option>
                <option value="rating">Highest Rating</option>
                <option value="newest">Newest Deals</option>
              </select>
            </div>

            {deals.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No deals found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
