import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [24.3636, 88.6245],
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
      className="map-container md:h-300 lg:h-500 p-4 border border-cyan-600"
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default ContactMap;
