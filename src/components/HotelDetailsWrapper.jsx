import { useParams } from "react-router-dom";
import { hotels } from "../data/hotels";
import HotelDetails from "./HotelDetails";

const HotelDetailsWrapper = ({ onBack, onBooking }) => {
  const { id } = useParams();
  const hotel = hotels.find((h) => h.id.toString() === id);

  if (!hotel)
    return <div className="p-10 text-center text-xl">Hotel not found</div>;

  return <HotelDetails hotel={hotel} onBack={onBack} onBooking={onBooking} />;
};

export default HotelDetailsWrapper;
