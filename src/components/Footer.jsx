import React from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
//               StayBooker
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Your trusted partner for finding the perfect accommodations
//               worldwide. Experience exceptional hospitality with every booking.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Quick Links</h4>
//             <div className="space-y-2">
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Find Hotels
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Destinations
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Special Offers
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Group Bookings
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Travel Guides
//               </a>
//             </div>
//           </div>

//           {/* Support */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Support</h4>
//             <div className="space-y-2">
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Help Center
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Contact Us
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Cancellation Policy
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="block text-gray-300 hover:text-white transition-colors text-sm"
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold">Contact Us</h4>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <MapPin className="h-4 w-4 text-gray-400" />
//                 <span className="text-gray-300 text-sm">
//                   123 Business Ave, Suite 100
//                   <br />
//                   New York, NY 10001
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="h-4 w-4 text-gray-400" />
//                 <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="h-4 w-4 text-gray-400" />
//                 <span className="text-gray-300 text-sm">
//                   support@staybooker.com
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © 2025 StayBooker. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-sm"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">StayBooker</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for finding the best hotel deals worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/hotels" className="text-gray-300 hover:text-white">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/deals" className="text-gray-300 hover:text-white">
                  Deals
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/cancellation"
                  className="text-gray-300 hover:text-white"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get exclusive deals and travel tips.
            </p>
            {/* <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-primary"
              />
              <button className="bg-white mt-2 px-4 py-1 rounded-r-lg hover:bg-primary/90 transition-colors text-black">
                Subscribe
              </button>
            </div> */}
            {/* <div className="flex flex-col sm:flex-row items-stretch w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg sm:rounded-r-none focus:outline-none text-white"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg sm:rounded-l-none hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div> */}
            <div className="w-full">
              <form className="flex flex-col sm:flex-row items-stretch max-w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow  px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded-md sm:rounded-r-none focus:outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="flex-grow px-4 py-2 bg-white text-black rounded-md sm:rounded-l-none hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} StayEasy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-300 hover:text-white text-sm">
              Terms
            </a>
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white text-sm"
            >
              Privacy
            </a>
            <a
              href="/cookies"
              className="text-gray-300 hover:text-white text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
