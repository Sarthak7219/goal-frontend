import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const WorkshopMap = ({ latitude, longitude }) => {
  if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
    return <p className="text-red-600">Location not available</p>;
  }
  return (
    <div className="map-box">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        style={{ height: "312px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>Workshop Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WorkshopMap;
