import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect } from 'react';
import locationIcon from "../../assets/images/icon-location.svg";
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: locationIcon, // Replace with the URL of your custom icon
    iconSize: [46, 56], // Size of the icon
    iconAnchor: [23, 28], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
});

const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(position);
    }, [position, map]);
    return null;
};

const Map = ({ position }: { position: [number, number] }) => {


    return (
        <div className="leaflet-container">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        You are here. <br /> ;)
                    </Popup>
                </Marker>
                <RecenterMap position={position} />
            </MapContainer>
        </div>
    );
};

export default Map;
