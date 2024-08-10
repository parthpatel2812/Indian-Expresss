import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { client } from "../../contentful/client";
import { MapContainer } from "./style";

export const GoogleMapComponent: React.FC = () => {
  const [locations, setLocations] = useState<{ lat: number; lng: number }[]>(
    []
  );
  const [center, setCenter] = useState<
    { lat: number; lng: number } | undefined
  >(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const MapLocation = await client.getEntries({
          content_type: "location",
        });
        console.log(MapLocation);
        const locationItems = MapLocation.items.map((item: any) => ({
          lat: item.fields.map.lat,
          lng: item.fields.map.lon,
        }));
        setLocations(locationItems);
        if (locationItems.length > 0) {
          setCenter(locationItems[0]); // Set the center to the first location
        }
      } catch (err) {
        setError("Failed to fetch location data from Contentful");
        console.error("Error fetching location data:", err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAz_DtBnJaKcAHKBZUdhQAE2CWTKvTRCS4"
      onLoad={() => console.log("Google Maps script loaded successfully")}
      onError={() => {
        setError("Failed to load Google Maps script");
        console.error("Error loading Google Maps script");
      }}
    >
      {center ? (
        <MapContainer>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={10}
          >
            {locations.map((location, index) => (
              <Marker key={index} position={location} />
            ))}
          </GoogleMap>
        </MapContainer>
      ) : (
        <div>Loading map...</div>
      )}
    </LoadScript>
  );
};
