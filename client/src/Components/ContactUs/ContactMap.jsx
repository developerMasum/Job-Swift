import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [24.3636, 88.6245], // Coordinates for Rajshahi, Bangladesh
        zoom: 12,
        layers: [
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }),
        ],
      });
    }

    // Add a marker
    const marker = L.marker([24.3636, 88.6245]).addTo(mapRef.current);
    marker.bindPopup("Rajshahi, Bangladesh").openPopup();
  }, []);

  return (
    <div
      id="map"
      className="map-container md:h-400px lg:h-500px p-4"
      style={{ width: "100%" }}
    ></div>
  );
};

export default ContactMap;
