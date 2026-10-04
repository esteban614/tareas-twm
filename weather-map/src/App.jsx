import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import { useState } from 'react'
import WeatherMarker from './WeatherMarker.jsx'

// puerto montt
const center = {
  lat: -41.469,
  lng: -72.942,
}

function LocationMarker() {
  const [located, setLocated] = useState(false)
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(e) {
      if (!located) {
        map.locate();
        setLocated(true);
      }
      setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  // solution i ended up with in like 5 seconds
  if (position === null) return null;
  return (
    <WeatherMarker position={position}/>
  )
}

function App() {
  return (
    <div>
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{height: 400}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker/>
        </MapContainer>
    </div>
  )
}

export default App
