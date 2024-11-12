import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapCom = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 27.7172, // Replace with your desired latitude
    lng: 85.324, // Replace with your desired longitude
  };

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && window.google) {
      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        position: defaultCenter,
        map: mapRef.current,
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAJpqqhUgo0s3luf4npKNYvZCw5ZFYKwBQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onLoad={(map) => (mapRef.current = map)}
      />
    </LoadScript>
  );
};

export default GoogleMapCom;
