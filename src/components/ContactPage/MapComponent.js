import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../assets/marker-icon.png";
import markerShadow from "../../assets/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
  shadowAnchor: [13, 41],
  popupAnchor: [-1, -34],
  tooltipAnchor: [16, -28],
});

const position = [51.366592734211096, -0.7949523497659183]; // your coordinates

const MapComponent = () => {
  return (
    <div className="map-component">
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
