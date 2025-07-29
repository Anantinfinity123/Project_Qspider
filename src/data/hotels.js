export const hotels = [
  {
    id: "1",
    name: "Grand Palace Hotel",
    location: "New York City, NY",
    rating: 4.8,
    reviewCount: 1247,
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    price: 299,
    originalPrice: 399,
    amenities: [
      "Free WiFi",
      "Pool",
      "Spa",
      "Restaurant",
      "Gym",
      "Room Service",
    ],
    description:
      "Experience luxury at its finest in the heart of Manhattan. Our Grand Palace Hotel offers world-class amenities and exceptional service.",
    rooms: [
      {
        id: "r1",
        type: "Deluxe Room",
        price: 299,
        originalPrice: 399,
        image:
          "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
          "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        amenities: ["King Bed", "City View", "Mini Bar", "WiFi"],
        maxGuests: 2,
        size: "35 m²",
        available: true,
      },
      {
        id: "r2",
        type: "Executive Suite",
        price: 499,
        originalPrice: 599,
        image:
          "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
          "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        amenities: [
          "King Bed",
          "Ocean View",
          "Living Area",
          "Balcony",
          "Mini Bar",
          "WiFi",
        ],
        maxGuests: 4,
        size: "65 m²",
        available: true,
      },
    ],
  },
  {
    id: "2",
    name: "Oceanview Resort",
    location: "Miami Beach, FL",
    rating: 4.6,
    reviewCount: 892,
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    price: 199,
    originalPrice: 249,
    amenities: ["Beach Access", "Pool", "Restaurant", "Bar", "WiFi"],
    description:
      "Relax on the pristine beaches of Miami with stunning ocean views and tropical paradise vibes.",
    rooms: [
      {
        id: "r3",
        type: "Ocean View Room",
        price: 199,
        originalPrice: 249,
        image:
          "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
          "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        amenities: ["Queen Bed", "Ocean View", "Balcony", "WiFi"],
        maxGuests: 2,
        size: "28 m²",
        available: true,
      },
    ],
  },
  {
    id: "3",
    name: "Mountain Lodge Retreat",
    location: "Aspen, CO",
    rating: 4.9,
    reviewCount: 634,
    image:
      "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    price: 349,
    amenities: ["Mountain View", "Fireplace", "Spa", "Restaurant", "WiFi"],
    description:
      "Escape to the serene mountains with cozy luxury and breathtaking alpine views.",
    rooms: [
      {
        id: "r4",
        type: "Alpine Suite",
        price: 349,
        image:
          "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800",
        images: [
          "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        amenities: [
          "King Bed",
          "Mountain View",
          "Fireplace",
          "Balcony",
          "WiFi",
        ],
        maxGuests: 2,
        size: "42 m²",
        available: true,
      },
    ],
  },
];

export const popularDestinations = [
  {
    name: "New York City",
    image:
      "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400",
    hotels: 125,
  },
  {
    name: "Miami Beach",
    image:
      "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=400",
    hotels: 89,
  },
  {
    name: "Los Angeles",
    image:
      "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2020-06/VC_PlacesToVisit_LosAngelesCounty_RF_1170794243.jpg.webp?itok=46pJYz8v",
    hotels: 156,
  },
  {
    name: "Las Vegas",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/01/00/2b/the-strip.jpg?w=600&h=400&s=1",
    hotels: 78,
  },
];
