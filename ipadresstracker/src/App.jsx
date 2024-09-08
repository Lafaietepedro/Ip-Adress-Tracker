import { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import './App.css';

const IPTracker = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipData, setIpData] = useState(null);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);

  const customIcon = new Icon({
    iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const fetchIpData = async () => {
    try {
      const geoResponse = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPIFY_API_KEY}&ipAddress=${ipAddress}`);
      setIpData(geoResponse.data);
      setMapCenter([geoResponse.data.location.lat, geoResponse.data.location.lng]);
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchIpData();
  };

  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center, 13);
    return null;
  }

  return (
    <div className="ip-tracker">
      <div className="background-header"></div>
      <div className="content">
        <h1 className="title">IP Address Tracker</h1>
        
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            placeholder="Search for any IP address or domain"
            className="input"
          />
          <button type="submit" className="button">
            &gt;
          </button>
        </form>

        {ipData && (
          <div className="info-card">
            <div className="info-grid">
              <div className="info-item">
                <h2 className="info-label">IP ADDRESS</h2>
                <p className="info-value">{ipData.ip}</p>
              </div>
              <div className="info-item">
                <h2 className="info-label">LOCATION</h2>
                <p className="info-value">{`${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`}</p>
              </div>
              <div className="info-item">
                <h2 className="info-label">TIMEZONE</h2>
                <p className="info-value">UTC {ipData.location.timezone}</p>
              </div>
              <div className="info-item">
                <h2 className="info-label">ISP</h2>
                <p className="info-value">{ipData.isp}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="map-container">
        <MapContainer center={mapCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={mapCenter} icon={customIcon}>
            <Popup>IP Location</Popup>
          </Marker>
          <ChangeView center={mapCenter} />
        </MapContainer>
      </div>
    </div>
  );
};

export default IPTracker;