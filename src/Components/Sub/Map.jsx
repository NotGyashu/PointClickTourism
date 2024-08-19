import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [position] = useState({
    lat: 25.276987, // Latitude for the address
    lng: 55.296249, // Longitude for the address
  });
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const mapKey = process.env.MAP_KEY;

  return (
    <div className="h-96 w-full bg-white col-span-2 border p-4">
      <div className="text-xl mb-5">
        Visit Us: <span className="text-sm">13A Street, Dubai, Dubai, AE</span>
      </div>

      {mapLoaded && (
        <LoadScript googleMapsApiKey={mapKey}>
          <GoogleMap
            center={position}
            zoom={13}
            mapContainerStyle={{ height: "85%", width: "100%" }}
            onClick={() => setShowInfoWindow(false)}
          >
            <Marker position={position} onClick={() => setShowInfoWindow(true)}>
              {showInfoWindow && (
                <InfoWindow onCloseClick={() => setShowInfoWindow(false)}>
                  <div>13A Street, Dubai, Dubai, AE</div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;
