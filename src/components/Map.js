import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css";
import {ImMap} from 'react-icons/im';


const Map = () => {
    return (
        <div className="map_container">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>

            <ImMap className="map_icon"/>
        </div>

    );
}

export default Map;