export const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description:
      "The City of Light, known for its art, fashion, gastronomy and culture",
    image:
      "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=1024x1024&w=0&k=20&c=pfImhAa3F5kZS0j2Zycs5iagAL1OL1QRUmY1bityDTA=",
    location: {
      lat: 48.8566,
      lng: 2.3522,
    },
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    bestTime: "April to October",
    category: "City Break",
    country: "France",
    averageStay: "4-6 days",
    popularWith: ["Couples", "Art Lovers", "Food Enthusiasts"],
    nearbyHotels: [
      {
        id: "hotel_1",
        name: "Hotel des Invalides",
        location: { lat: 48.8566, lng: 2.3122 },
        rating: 4.5,
        price: 250,
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Spa", "Parking"],
      },
      {
        id: "hotel_2",
        name: "Le Marais Boutique Hotel",
        location: { lat: 48.8584, lng: 2.3622 },
        rating: 4.2,
        price: 180,
        image:
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Bar"],
      },
      {
        id: "hotel_3",
        name: "Champs Elysees Plaza",
        location: { lat: 48.8698, lng: 2.3075 },
        rating: 4.7,
        price: 320,
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Gym", "Concierge"],
      },
    ],
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    description: "A fascinating blend of traditional and ultra-modern culture",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    location: {
      lat: 35.6762,
      lng: 139.6503,
    },
    highlights: ["Senso-ji Temple", "Shibuya Crossing", "Tokyo Skytree"],
    bestTime: "March to May, September to November",
    category: "Cultural",
    country: "Japan",
    averageStay: "5-7 days",
    popularWith: ["Culture Seekers", "Food Lovers", "Tech Enthusiasts"],
    nearbyHotels: [
      {
        id: "hotel_4",
        name: "Tokyo Grand Imperial",
        location: { lat: 35.6762, lng: 139.7603 },
        rating: 4.8,
        price: 280,
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Spa", "Business Center"],
      },
      {
        id: "hotel_5",
        name: "Shibuya Modern Hotel",
        location: { lat: 35.6598, lng: 139.7006 },
        rating: 4.3,
        price: 200,
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Gym"],
      },
    ],
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches and rich culture",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    location: {
      lat: -8.3405,
      lng: 115.092,
    },
    highlights: ["Uluwatu Temple", "Rice Terraces", "Seminyak Beach"],
    bestTime: "April to October",
    category: "Beach",
    country: "Indonesia",
    averageStay: "7-10 days",
    popularWith: ["Beach Lovers", "Digital Nomads", "Spa Enthusiasts"],
    nearbyHotels: [
      {
        id: "hotel_6",
        name: "Bali Beach Resort",
        location: { lat: -8.3405, lng: 115.152 },
        rating: 4.6,
        price: 150,
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Pool", "Spa", "Beach Access"],
      },
      {
        id: "hotel_7",
        name: "Ubud Jungle Lodge",
        location: { lat: -8.5069, lng: 115.2625 },
        rating: 4.4,
        price: 120,
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Yoga Studio", "Nature Tours"],
      },
    ],
  },
  {
    id: 4,
    name: "New York City, USA",
    description:
      "The city that never sleeps, iconic skyline and endless attractions",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
    highlights: ["Times Square", "Central Park", "Statue of Liberty"],
    bestTime: "April to June, September to November",
    category: "City Break",
    country: "USA",
    averageStay: "4-6 days",
    popularWith: ["Urban Explorers", "Shopping Enthusiasts", "Theater Lovers"],
    nearbyHotels: [
      {
        id: "hotel_8",
        name: "Manhattan Plaza Hotel",
        location: { lat: 40.7589, lng: -73.9851 },
        rating: 4.5,
        price: 300,
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Restaurant", "Fitness Center", "Concierge"],
      },
    ],
  },
  {
    id: 5,
    name: "Santorini, Greece",
    description:
      "Stunning volcanic island with white-washed buildings and blue domes",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    location: {
      lat: 36.3932,
      lng: 25.4615,
    },
    highlights: ["Oia Sunset", "Fira Town", "Red Beach"],
    bestTime: "April to October",
    category: "Island",
    country: "Greece",
    averageStay: "3-5 days",
    popularWith: ["Honeymooners", "Photographers", "Wine Lovers"],
    nearbyHotels: [
      {
        id: "hotel_9",
        name: "Santorini Blue Domes",
        location: { lat: 36.4618, lng: 25.3753 },
        rating: 4.9,
        price: 450,
        image:
          "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=300&h=200&fit=crop",
        amenities: ["WiFi", "Pool", "Restaurant", "Sunset Views"],
      },
    ],
  },
];
