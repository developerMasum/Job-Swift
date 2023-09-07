import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const mapRef = useRef(null);
  const headerHeight = 80; // Replace with the actual height of your header

  // Calculate the map container height
  const [mapHeight, setMapHeight] = useState(window.innerHeight - headerHeight);

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

  // Update the map container height when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setMapHeight(window.innerHeight - headerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight]);

  return (
    <div
      id="map"
      className="map-container p-4 border border-cyan-600"
      style={{ width: "100%", height: `${mapHeight}px` }}
    ></div>
  );
};

export default ContactMap;
