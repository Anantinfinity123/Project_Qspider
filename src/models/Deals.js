export class Deal {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.hotelId = data.hotelId;
    this.hotelName = data.hotelName;
    this.location = data.location;
    this.originalPrice = data.originalPrice;
    this.discountedPrice = data.discountedPrice;
    this.discountPercentage = data.discountPercentage;
    this.currency = data.currency;
    this.dealType = data.dealType;
    this.validFrom = data.validFrom;
    this.validTo = data.validTo;
    this.image = data.image;
    this.description = data.description;
    this.inclusions = data.inclusions || [];
    this.rating = data.rating;
    this.reviews = data.reviews;
    this.roomType = data.roomType;
    this.bedType = data.bedType;
    this.maxGuests = data.maxGuests;
    this.amenities = data.amenities || [];
    this.dealStatus = data.dealStatus;
    this.bookingDeadline = data.bookingDeadline;
    this.minStayNights = data.minStayNights;
    this.isRefundable = data.isRefundable;
    this.freeCancellation = data.freeCancellation;
    this.cancellationDeadline = data.cancellationDeadline;
  }

  get savings() {
    return this.originalPrice - this.discountedPrice;
  }

  get isExpiringSoon() {
    const deadline = new Date(this.bookingDeadline);
    const now = new Date();
    const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
    return daysLeft <= 7;
  }

  get isActive() {
    return this.dealStatus === "active" || this.dealStatus === "limited_time";
  }

  get formattedValidPeriod() {
    const from = new Date(this.validFrom).toLocaleDateString();
    const to = new Date(this.validTo).toLocaleDateString();
    return `${from} - ${to}`;
  }

  get shortLocation() {
    return `${this.location.city}, ${this.location.state}`;
  }

  get ratingStars() {
    return (
      "★".repeat(Math.floor(this.rating)) +
      (this.rating % 1 >= 0.5 ? "☆" : "") +
      "☆".repeat(5 - Math.ceil(this.rating))
    );
  }
}
