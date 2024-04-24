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
            // Il faut retourner un élément valide même si aucun cas n'est atteint
            // Retourner un élément vide ou un message par défaut
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
  const center = { lat: 48.8566, lng: 2.3522 }; // Coordonnées de Paris
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
      <div className="fixed top-0 left-0 right-0 z-10 p-4">
        <input className="p-2 w-full" type="text" placeholder="Recherchez des adresses ou des lieux" />
      </div>
      <MapComponent apiKey={process.env.NEXT_GOOGLE_MAPS_API_KEY as string} />
    </div>
  );
};

export default MapPage;