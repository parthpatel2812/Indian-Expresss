// import React, { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import { client } from "../../contentful/client";
// import { MapContainer } from "./style";

// export const GoogleMapComponent: React.FC = () => {
//   const [locations, setLocations] = useState<{ lat: number; lng: number }[]>(
//     []
//   );
//   const [center, setCenter] = useState<
//     { lat: number; lng: number } | undefined
//   >(undefined);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const MapLocation = await client.getEntries({
//           content_type: "location",
//         });
//         console.log(MapLocation);
//         const locationItems = MapLocation.items.map((item: any) => ({
//           lat: item.fields.map.lat,
//           lng: item.fields.map.lon,
//         }));
//         setLocations(locationItems);
//         if (locationItems.length > 0) {
//           setCenter(locationItems[0]); // Set the center to the first location
//         }
//       } catch (err) {
//         setError("Failed to fetch location data from Contentful");
//         console.error("Error fetching location data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyAz_DtBnJaKcAHKBZUdhQAE2CWTKvTRCS4"
//       onLoad={() => console.log("Google Maps script loaded successfully")}
//       onError={() => {
//         setError("Failed to load Google Maps script");
//         console.error("Error loading Google Maps script");
//       }}
//     >
//       {center ? (
//         <MapContainer>
//           <GoogleMap

//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             center={center}
//             zoom={10}
//           >
//             {locations.map((location, index) => (
//               <Marker key={index} position={location} />
//             ))}
//           </GoogleMap>
//         </MapContainer>
//       ) : (
//         <div>Loading map...</div>
//       )}
//     </LoadScript>
//   );
// };
import React from "react";
import { MapContainer } from "./style";

export const GoogleMapComponent: React.FC = () => {
  return (
    <MapContainer>
      <iframe
        title="Google Map - Space Needle, Seattle"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.264892421108!2d-96.96431232453392!3d32.91759897360518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c292000cb0f01%3A0xadc2256b0a95a81f!2sIndian%20Expresss%20Food%20Truck!5e0!3m2!1sen!2sca!4v1740878571529!5m2!1sen!2sca?key=AIzaSyAFzM-FF4gah1RIiboHcdxALM-SLp4EkYY&q=Space+Needle,Seattle+WA`}
      ></iframe>
    </MapContainer>
  );
};
