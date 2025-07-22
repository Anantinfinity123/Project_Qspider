import React, { useState } from "react";
import { Search, Menu, X, User, Heart, Calendar } from "lucide-react";

const Header = ({ onSearchToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                StayBooker
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Deals
              </a>
              <button
                onClick={onSearchToggle}
                className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </div>
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-gray-500 hover:text-blue-600 p-2 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-blue-600 p-2 transition-colors">
                <Calendar className="h-5 w-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 p-2 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Account</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 animate-in fade-in-0 zoom-in-95">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Create Account
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Bookings
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-5 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              Hotels
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Destinations
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              Deals
            </a>
            <button
              onClick={onSearchToggle}
              className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              <User className="h-8 w-8 text-gray-400" />
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-900">
                  Guest User
                </div>
                <div className="text-sm text-gray-500">
                  Sign in for better experience
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                Create Account
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-blue-600 transition-colors"
              >
                My Bookings
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
