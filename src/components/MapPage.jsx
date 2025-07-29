import { Link, useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapPage() {
  const location = useLocation();
  const { destination } = location.state || {};
  if (!destination) return <p>No destination selected.</p>;

  const { lat, lng } = destination.location;
  const center = [lat, lng];

  return (
    <div
      style={{ height: "100vh" }}
      className="mt-16 p-4 max-w-6xl mx-auto flex-column justify-content-center items-center"
    >
      <Link to="/destinations" className="text-blue-600">
        ← Back to Destinations
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">{destination.name}</h1>
      <p className="text-gray-700 mb-6">{destination.description}</p>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "80%", width: "80%" }}
      >
        {/* OpenStreetMap tile layer (free):contentReference[oaicite:11]{index=11} */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker for the destination:contentReference[oaicite:12]{index=12} */}
        <Marker position={center}>
          <Popup>{destination.name}</Popup>
        </Marker>

        {/* Markers for nearby hotels */}
        {destination.nearbyHotels &&
          destination.nearbyHotels.map((hotel) => (
            <Marker
              key={hotel.id}
              position={[hotel.location.lat, hotel.location.lng]}
            >
              <Popup>
                <strong>{hotel.name}</strong>
                <br />
                Rating: {hotel.rating} ⭐, ${hotel.price}/night
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

// src/pages/MapPage.jsx
// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Link, useLocation } from "react-router-dom";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix marker icon issue in Leaflet with React
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// export default function MapPage() {
//   const { state } = useLocation();

//   if (!state) {
//     return <p>No destination data provided.</p>;
//   }

//   const { destination, hotels } = state;

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <Link to="/destinations" className="text-blue-600 underline">
//         ← Back to Destinations
//       </Link>

//       <h1 className="text-3xl font-bold mt-4 mb-2">{destination.name}</h1>
//       <p className="text-gray-700 mb-6">{destination.description}</p>

//       <div className="h-[500px] w-full rounded shadow">
//         <MapContainer
//           center={[destination.lat, destination.lng]}
//           zoom={14}
//           scrollWheelZoom={true}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//           />

//           {/* Destination marker */}
//           <Marker position={[destination.lat, destination.lng]}>
//             <Popup>
//               <strong>{destination.name}</strong>
//               <br />
//               {destination.description}
//             </Popup>
//           </Marker>

//           {/* Nearby Hotels */}
//           {Array.isArray(hotels) &&
//             hotels.map((hotel, idx) => (
//               <Marker key={idx} position={[hotel.lat, hotel.lng]}>
//                 <Popup>
//                   <div>
//                     <img
//                       src={hotel.image}
//                       alt={hotel.name}
//                       className="w-40 h-24 object-cover mb-2 rounded"
//                     />
//                     <strong>{hotel.name}</strong>
//                     <br />
//                     {hotel.description}
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }
