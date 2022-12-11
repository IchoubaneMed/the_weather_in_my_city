import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import "./Map.css";
import { ImMap } from 'react-icons/im';


const Map = ({ lon, lat }) => {
    const position = [lat, lon]


    return (
        <div className="map_container">
            {/* Expect for its children, MapContainer props are immutable:
            changing them after they have set a first time will have no effect
            on the Map instance or its container */}
            <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Use it like this */}
                <ChangeMapView coords={position} />
                <Marker position={position}>
                </Marker>
            </MapContainer>

            <ImMap className="map_icon" />
        </div>

    );
}

// a child component that will change the map view upon position change
function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}

export default Map;