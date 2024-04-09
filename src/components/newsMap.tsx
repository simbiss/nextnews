import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
/*
type NewsMapProps = {
  newsData: any[]; // Define a more specific type based on your news data structure
};
const position = [51.505, -0.09]

const NewsMap: React.FC<NewsMapProps> = ({ newsData }) => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {newsData.map((newsItem, index) => (
        <Marker key={index} position={[newsItem.latitude, newsItem.longitude]}>
          <Popup>
            {newsItem.title} <br /> {newsItem.summary}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default NewsMap;*/
