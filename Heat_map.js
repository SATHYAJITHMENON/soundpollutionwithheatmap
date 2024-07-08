import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import HeatmapLayer from './HeatmapLayer';

const GeoHeatmap = () => {
  const [data, setData] = useState({});

  // Custom hook to set map view on click
  function SetViewOnClick() {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: true,
      });
    });
    return null;
  }

  useEffect(() => {
    const fetchData = () => {
      const dbRef = ref(database, 'sensor/data/Device1');
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={[13.039419552594897, 80.2606248242588]} zoom={10} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <SetViewOnClick />
      <HeatmapLayer data={data} />
    </MapContainer>
  );
};

export default GeoHeatmap;

