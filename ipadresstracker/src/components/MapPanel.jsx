import { useEffect } from 'react';
import { Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import markerIconUrl from '../assets/icon-location.svg';
import { formatCoordinates, formatLocation, formatValue } from '../utils/formatters';

const DEFAULT_CENTER = [40.7128, -74.006];

const trackerIcon = new Icon({
  iconUrl: markerIconUrl,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, -46],
});

function FlyToLocation({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 11, { duration: 1.2 });
  }, [center, map]);

  return null;
}

function MapPanel({ data, isLoading }) {
  const center =
    typeof data?.location?.lat === 'number' && typeof data?.location?.lng === 'number'
      ? [data.location.lat, data.location.lng]
      : DEFAULT_CENTER;

  return (
    <section className="panel map-panel">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Spatial View</p>
          <h2>Map context</h2>
        </div>
        <p className="section-heading__body">
          The map is framed as a supporting panel instead of the whole page, which improves focus
          and gives the UI a more editorial dashboard feel.
        </p>
      </div>

      <div className="map-meta">
        <article>
          <span>Resolved place</span>
          <strong>{formatLocation(data?.location)}</strong>
        </article>
        <article>
          <span>Coordinates</span>
          <strong>{formatCoordinates(data?.location)}</strong>
        </article>
        <article>
          <span>ISP</span>
          <strong>{formatValue(data?.isp)}</strong>
        </article>
      </div>

      <div className="map-shell">
        {isLoading ? (
          <div className="map-shell__overlay">
            <span className="map-shell__pulse" aria-hidden="true" />
            <p>Refreshing location data…</p>
          </div>
        ) : null}

        <MapContainer center={center} zoom={11} scrollWheelZoom={false} className="map-canvas">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          <Marker position={center} icon={trackerIcon}>
            <Popup>
              <strong>{formatValue(data?.ip)}</strong>
              <br />
              {formatLocation(data?.location)}
            </Popup>
          </Marker>

          <FlyToLocation center={center} />
        </MapContainer>
      </div>
    </section>
  );
}

export default MapPanel;
