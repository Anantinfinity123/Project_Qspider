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
      "https://images.pexels.com/photos/161772/pexels-photo-161772.jpeg?auto=compress&cs=tinysrgb&w=400",
    hotels: 156,
  },
  {
    name: "Las Vegas",
    image:
      "https://images.pexels.com/photos/161758/governor-of-poker-3-1001485-161758.jpeg?auto=compress&cs=tinysrgb&w=400",
    hotels: 78,
  },
];
