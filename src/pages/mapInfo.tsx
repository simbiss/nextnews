import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap } from "@react-google-maps/api";
import React from 'react';



const MapComponent: React.FC<{ apiKey: string }> = ({ apiKey }) => {
    const render = (status: Status): React.ReactElement => {
        switch (status) {
          case Status.LOADING:
            return <p>Loading...</p>;
          case Status.FAILURE:
            return <p>Error loading map</p>;
          default:
            return <></>; // Retourne un fragment vide si aucun des cas n'est atteint
        }
      };

  return (
    <Wrapper apiKey={apiKey} render={render}>
      <MyMapComponent />
    </Wrapper>
  );
};

const MyMapComponent: React.FC = () => {
  // Configuration initiale de la carte
  const center = { lat: 45.508888, lng: -73.561668 }; // Coordonnées de Paris
  const zoom = 12;

  return (
    <div className="h-screen">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={zoom}>
        {/* Ajoutez des markers ou d'autres éléments ici */}
      </GoogleMap>
    </div>
  );
};

const MapPage: React.FC = () => {
  return (
    <div>
<div className="fixed top-10 left-20 right-20 z-10 p-4">
  <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
    <input className="p-2 w-full text-black" type="text" placeholder="Recherchez des adresses ou des lieux" />
    <button className="p-4 bg-gray-200 hover:bg-gray-300">
      <svg className="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</div>
      <MapComponent apiKey={process.env.NEXT_GOOGLE_MAPS_API_KEY as string} />
    </div>
  );
};

export default MapPage;