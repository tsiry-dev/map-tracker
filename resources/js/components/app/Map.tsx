import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { addMarker } from '@/stores/map-slice';

export default function Map() {

    const [latlng, setLatLng] = useState<number[]>([]);
    const dispatch = useDispatch();


    const handleInfo = async (lat:number, lng: number) => {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`
        );

        if (response.ok) {
            const data = await response.json();
            return data;
         }

         return {
           error: 'Unable to fetch location information'
         };
    }

  // Fonction pour gérer le clic sur la carte
  function LocationMarker() {
    useMapEvents({
      async click(event) {
        const { lat, lng } = event.latlng;
        setLatLng([lat, lng]); // Mettre à jour l'état avec les coordonnées

        const info = await handleInfo(lat, lng); // Appeler la fonction pour obtenir les informations de localisation
        dispatch(addMarker({ lat, lng, info })); // Ajouter le marqueur à l'état global
      },
    });

    return null; // Pas besoin de retour de JSX ici, juste gérer les événements
  }

  return (
    <div className="bg-green-500">
      {/* Conteneur de la carte */}
      <MapContainer
        center={[51.39649054482044, 24.80757667892894]} // Position initiale
        zoom={3} // Niveau de zoom
        style={{ height: '90vh', width: '100%' }}
      >
        {/* Calque des tuiles (OpenStreetMap ici) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
