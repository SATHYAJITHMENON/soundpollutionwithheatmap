import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

const HeatmapLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) return;

    const points = Object.values(data).map(d => [d.latitude, d.longitude, d.decibel]);

    const minDecibel = 0;
    const maxDecibel = 50;

    const normalize = (value) => (value - minDecibel) / (maxDecibel - minDecibel);

    const normalizedPoints = points.map(point => [
      point[0],
      point[1],
      normalize(point[2])
    ]);

    const heat = L.heatLayer(normalizedPoints, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: {
        0.0: 'green',    // 0 to 15 decibels will be green
        0.3: 'blue',     // 15.1 to 21 decibels will be blue
        0.45: 'orange',  // 21.1 to 35 decibels will be orange
        0.7: 'red'       // 35.1 to 50 decibels will be red
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [data, map]);

  return null;
};

export default HeatmapLayer;
