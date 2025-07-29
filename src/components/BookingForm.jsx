import React, { useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  CreditCard,
  Shield,
  Check,
} from "lucide-react";

const BookingForm = ({ hotel, room, onBack, onConfirm }) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    agreeToTerms: false,
  });

  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Confirmation

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    return Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const roomTotal = room.price * nights;
    const taxes = roomTotal * 0.12;
    return {
      roomTotal,
      taxes,
      total: roomTotal + taxes,
    };
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      onConfirm();
    }
  };

  const { roomTotal, taxes, total } = calculateTotal();
  const nights = calculateNights();

  if (step === 3) {
    return (
      <div className="mt-16 min-h-screen bg-gray-50 animate-in fade-in-50 duration-500">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 mb-8">
              Your reservation has been successfully processed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-lg mb-4">Booking Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Hotel:</span>
                  <span className="font-semibold">{hotel.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Room:</span>
                  <span className="font-semibold">{room.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-semibold">{formData.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-semibold">{formData.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-semibold">{formData.guests}</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="font-bold">Total Paid:</span>
                  <span className="font-bold text-green-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onConfirm}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-in fade-in-50 duration-500">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to hotel</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Progress Steps */}
              <div className="flex items-center mb-8">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  <span className="text-sm font-semibold">1</span>
                </div>
                <div
                  className={`flex-1 h-1 mx-4 ${
                    step >= 2 ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  <span className="text-sm font-semibold">2</span>
                </div>
                <div
                  className={`flex-1 h-1 mx-4 ${
                    step >= 3 ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  <span className="text-sm font-semibold">3</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Booking Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-in Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-out Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          {[1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                              {num} Guest{num > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md"
                    >
                      Continue to Payment
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Payment Information
                    </h2>

                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                      <Shield className="h-5 w-5" />
                      <span className="text-sm">
                        Your payment information is secure and encrypted
                      </span>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 rounded"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!formData.agreeToTerms}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Complete Booking
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Booking Summary
              </h3>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {hotel.name}
                    </h4>
                    <p className="text-sm text-gray-600">{room.type}</p>
                    <p className="text-sm text-gray-500">{hotel.location}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in</span>
                    <span className="font-semibold">
                      {formData.checkIn || "Select date"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out</span>
                    <span className="font-semibold">
                      {formData.checkOut || "Select date"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests</span>
                    <span className="font-semibold">{formData.guests}</span>
                  </div>
                  {nights > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nights</span>
                      <span className="font-semibold">{nights}</span>
                    </div>
                  )}
                </div>

                {nights > 0 && (
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        ${room.price} × {nights} nights
                      </span>
                      <span className="font-semibold">
                        ${roomTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes & fees</span>
                      <span className="font-semibold">${taxes.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
