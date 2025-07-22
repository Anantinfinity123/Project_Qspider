import React from "react";
import { popularDestinations } from "../data/hotels";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in-50 slide-in-from-bottom-5 duration-1000">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Dream Stay
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-5 duration-1000 delay-200">
            Discover amazing hotels, resorts, and unique stays around the world.
            Book with confidence and create unforgettable memories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {popularDestinations.map((destination, index) => (
              <div
                key={destination.name}
                className="group cursor-pointer animate-in fade-in-50 slide-in-from-bottom-5 duration-1000"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="font-semibold text-sm">
                      {destination.name}
                    </h3>
                    <p className="text-xs opacity-80">
                      {destination.hotels} hotels
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  );
};

export default HeroSection;
