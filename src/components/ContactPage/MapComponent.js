import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  const position = [51.366592734211096, -0.7949523497659183]; // replace with your coordinates

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}></Marker>
    </MapContainer>
  );
}
export default MapComponent;
