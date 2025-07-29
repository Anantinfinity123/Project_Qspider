// import api from "./api";

// Mock deals data - replace with real API calls in production
const mockDealsData = {
  deals: [
    {
      id: "deal_001",
      title: "Summer Paradise Getaway",
      hotelId: "hotel_001",
      hotelName: "Grand Ocean Resort & Spa",
      location: {
        city: "Miami",
        state: "Florida",
        country: "USA",
        address: "1200 Ocean Drive, Miami Beach, FL 33139",
      },
      originalPrice: 450,
      discountedPrice: 299,
      discountPercentage: 34,
      currency: "USD",
      dealType: "Early Bird Special",
      validFrom: "2025-06-01",
      validTo: "2025-08-31",
      image:
        "https://images.trvl-media.com/lodging/103000000/102460000/102458300/102458264/459c85cc.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      description:
        "Escape to paradise with our summer special! Enjoy stunning ocean views, world-class spa treatments, and gourmet dining at a 34% discount.",
      inclusions: [
        "Complimentary breakfast for 2",
        "Free WiFi",
        "Access to private beach",
        "Welcome cocktail",
        "Late checkout until 2 PM",
      ],
      rating: 4.7,
      reviews: 1284,
      roomType: "Ocean View Suite",
      bedType: "King Bed",
      maxGuests: 2,
      amenities: [
        "Swimming Pool",
        "Spa & Wellness Center",
        "Fitness Center",
        "Restaurant",
        "Bar",
        "Room Service",
        "Concierge",
        "Valet Parking",
      ],
      dealStatus: "active",
      bookingDeadline: "2025-05-15",
      minStayNights: 2,
      isRefundable: true,
      freeCancellation: true,
      cancellationDeadline: "48 hours before check-in",
    },
    {
      id: "deal_002",
      title: "Urban Explorer Package",
      hotelId: "hotel_002",
      hotelName: "Metropolitan Business Hotel",
      location: {
        city: "New York",
        state: "New York",
        country: "USA",
        address: "123 West 44th Street, Manhattan, NY 10036",
      },
      originalPrice: 350,
      discountedPrice: 249,
      discountPercentage: 29,
      currency: "USD",
      dealType: "Weekend Special",
      validFrom: "2025-07-01",
      validTo: "2025-09-30",
      image:
        "https://img.oyster.com/production/Asia/India/National%20Capital%20Territory%20of%20Delhi/New%20Delhi/The%20Metropolitan%20Hotel%20&%20Spa%20New%20Delhi/Feature%20Image/india_hotels_the_metropolitan_hotel_and_spa_new_delhi_feature_image_fddcf38580.webp",
      description:
        "Experience the heart of NYC with our weekend package. Perfect for urban explorers seeking comfort and convenience in Times Square.",
      inclusions: [
        "Continental breakfast",
        "Free WiFi",
        "Fitness center access",
        "Business center access",
        "Complimentary newspaper",
      ],
      rating: 4.3,
      reviews: 892,
      roomType: "Deluxe City View",
      bedType: "Queen Bed",
      maxGuests: 2,
      amenities: [
        "Fitness Center",
        "Business Center",
        "Restaurant",
        "Bar",
        "24/7 Front Desk",
        "Laundry Service",
        "Room Service",
        "Elevator",
      ],
      dealStatus: "active",
      bookingDeadline: "2025-06-15",
      minStayNights: 2,
      isRefundable: false,
      freeCancellation: true,
      cancellationDeadline: "24 hours before check-in",
    },
    {
      id: "deal_003",
      title: "Mountain Retreat Special",
      hotelId: "hotel_003",
      hotelName: "Flew Alpine Lodge & Cabins",
      location: {
        city: "Aspen",
        state: "Colorado",
        country: "USA",
        address: "555 Mountain View Drive, Aspen, CO 81611",
      },
      originalPrice: 275,
      discountedPrice: 199,
      discountPercentage: 28,
      currency: "USD",
      dealType: "Seasonal Offer",
      validFrom: "2025-05-15",
      validTo: "2025-10-15",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/db/1e/e0/family-cabin.jpg?w=900&h=500&s=1",
      description:
        "Reconnect with nature in our cozy mountain retreat. Perfect for hiking, skiing, and peaceful mountain getaways.",
      inclusions: [
        "Mountain breakfast buffet",
        "Free WiFi",
        "Hiking trail maps",
        "Fireplace in room",
        "Hot chocolate service",
      ],
      rating: 4.6,
      reviews: 567,
      roomType: "Mountain Cabin",
      bedType: "King Bed + Sofa Bed",
      maxGuests: 4,
      amenities: [
        "Fireplace",
        "Hiking Trails",
        "Restaurant",
        "Bar",
        "Ski Storage",
        "Parking",
        "Pet Friendly",
        "Game Room",
      ],
      dealStatus: "active",
      bookingDeadline: "2025-05-01",
      minStayNights: 3,
      isRefundable: true,
      freeCancellation: true,
      cancellationDeadline: "72 hours before check-in",
    },
    {
      id: "deal_004",
      title: "Historic Charm Experience",
      hotelId: "hotel_004",
      hotelName: "The Heritage Grand Hotel",
      location: {
        city: "Charleston",
        state: "South Carolina",
        country: "USA",
        address: "200 Historic District Lane, Charleston, SC 29401",
      },
      originalPrice: 320,
      discountedPrice: 245,
      discountPercentage: 23,
      currency: "USD",
      dealType: "Heritage Package",
      validFrom: "2025-08-01",
      validTo: "2025-11-30",
      image:
        "https://www.thegrandhotelnuwaraeliya.com/wp-content/uploads/2023/11/grand-hotel-graden-1920x1000-1.jpg",
      description:
        "Step back in time with our heritage package. Experience Southern hospitality in our beautifully restored 19th-century hotel.",
      inclusions: [
        "Southern breakfast",
        "Free WiFi",
        "Historic district walking tour",
        "Welcome mint julep",
        "Turndown service",
      ],
      rating: 4.8,
      reviews: 1156,
      roomType: "Heritage Suite",
      bedType: "King Bed",
      maxGuests: 2,
      amenities: [
        "Historic Architecture",
        "Fine Dining Restaurant",
        "Cocktail Bar",
        "Spa Services",
        "Concierge",
        "Valet Parking",
        "Garden Courtyard",
        "Library",
      ],
      dealStatus: "active",
      bookingDeadline: "2025-07-15",
      minStayNights: 2,
      isRefundable: false,
      freeCancellation: false,
      cancellationDeadline: "48 hours before check-in",
    },
    {
      id: "deal_005",
      title: "Desert Oasis Escape",
      hotelId: "hotel_005",
      hotelName: "Sunset Thar Desert Resort",
      location: {
        city: "Scottsdale",
        state: "Arizona",
        country: "USA",
        address: "777 Desert View Road, Scottsdale, AZ 85260",
      },
      originalPrice: 425,
      discountedPrice: 289,
      discountPercentage: 32,
      currency: "USD",
      dealType: "Flash Sale",
      validFrom: "2025-09-01",
      validTo: "2025-12-15",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500003283.jpg?k=ec1a582138e87677b190378fd9171a704dd34320517d411e76c47d06df054c9d&o=&hp=1",
      description:
        "Experience the beauty of the Sonoran Desert with our flash sale offer. Luxury meets adventure in this stunning desert oasis.",
      inclusions: [
        "Southwestern breakfast",
        "Free WiFi",
        "Desert sunset tour",
        "Welcome margarita",
        "Pool towel service",
      ],
      rating: 4.5,
      reviews: 743,
      roomType: "Desert Villa",
      bedType: "King Bed",
      maxGuests: 2,
      amenities: [
        "Infinity Pool",
        "Desert Spa",
        "Golf Course",
        "Tennis Court",
        "Restaurant",
        "Bar",
        "Hot Tub",
        "Fitness Center",
      ],
      dealStatus: "limited_time",
      bookingDeadline: "2025-08-15",
      minStayNights: 2,
      isRefundable: false,
      freeCancellation: false,
      cancellationDeadline: "7 days before check-in",
    },
    {
      id: "deal_006",
      title: "Lakeside Tranquility",
      hotelId: "hotel_006",
      hotelName: "Royal Crystal Lake Resort",
      location: {
        city: "Lake Tahoe",
        state: "California",
        country: "USA",
        address: "890 Lakeshore Boulevard, Lake Tahoe, CA 96150",
      },
      originalPrice: 380,
      discountedPrice: 279,
      discountPercentage: 27,
      currency: "USD",
      dealType: "Nature Lover's Deal",
      validFrom: "2025-06-15",
      validTo: "2025-09-15",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/73/1b/f9/south-bound-on-hwy-31.jpg?w=900&h=500&s=1",
      description:
        "Find peace and tranquility by the crystal-clear waters of Lake Tahoe. Perfect for water sports enthusiasts and nature lovers.",
      inclusions: [
        "Lakeside breakfast",
        "Free WiFi",
        "Kayak rental (2 hours)",
        "Lake access",
        "Bike rental",
      ],
      rating: 4.4,
      reviews: 623,
      roomType: "Lakefront Room",
      bedType: "Queen Bed",
      maxGuests: 2,
      amenities: [
        "Private Beach",
        "Water Sports",
        "Restaurant",
        "Bar",
        "Spa",
        "Fishing",
        "Hiking Trails",
        "Marina",
      ],
      dealStatus: "active",
      bookingDeadline: "2025-06-01",
      minStayNights: 2,
      isRefundable: true,
      freeCancellation: true,
      cancellationDeadline: "48 hours before check-in",
    },
  ],
  metadata: {
    totalDeals: 6,
    lastUpdated: "2025-01-24T14:56:00Z",
    currency: "USD",
    version: "1.0",
  },
};

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchDeals = async (filters = {}) => {
  await delay(500); // Simulate network delay

  let deals = mockDealsData.deals;

  // Apply filters
  if (filters.dealType) {
    deals = deals.filter((deal) => deal.dealType === filters.dealType);
  }

  if (filters.maxPrice) {
    deals = deals.filter((deal) => deal.discountedPrice <= filters.maxPrice);
  }

  if (filters.minRating) {
    deals = deals.filter((deal) => deal.rating >= filters.minRating);
  }

  if (filters.city) {
    deals = deals.filter((deal) =>
      deal.location.city.toLowerCase().includes(filters.city.toLowerCase())
    );
  }

  return {
    deals,
    metadata: {
      ...mockDealsData.metadata,
      totalDeals: deals.length,
    },
  };
};

export const fetchDealById = async (id) => {
  await delay(300);
  const deal = mockDealsData.deals.find((deal) => deal.id === id);
  if (!deal) {
    throw new Error("Deal not found");
  }
  return deal;
};

export const fetchFeaturedDeals = async () => {
  await delay(400);
  // Return top 3 deals with highest discount percentage
  const featuredDeals = mockDealsData.deals
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 3);

  return featuredDeals;
};
