import './App.css';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function App() {

  const [ipData, setIpData] = useState(null);
  const [inputValue, setInputValue] = useState('')
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Inicializar o mapa quando o componente for montado
    const map = L.map('map').setView([40.7128, -74.0060], 13);

    // Adicionando o tile layer do mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicionando um marcador no mapa
    L.marker([40.7128, -74.0060]).addTo(map)
      .bindPopup('Brooklyn, NY 10001')
      .openPopup();
  }, []);

  return (
    <div className='App'>
      <div className='banner'>
        <h1>Ip Adress Tracker</h1>
        <input type="text" placeholder='Search for any IP address or domain'/>
      </div>
      <div className="show_data">
        <div className="data_box1">
          <h2>IP ADRESS</h2>
          <p>pass</p>
        </div>
        <div className="data_box2">
          <h2>LOCATION</h2>
          <p>pass</p>
        </div>
        <div className="data_box3">
          <h2>TIMEZONE</h2>
          <p>pass</p>
        </div>
        <div className="data_box4">
          <h2>ISP</h2>
          <p>pass</p>
        </div>
      </div>
      <div className="map_container">

      </div>
    </div>
  )
}

export default App
