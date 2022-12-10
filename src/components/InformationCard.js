import "./InformationCard.css";
import { HiInformationCircle } from 'react-icons/hi';
import { MdVisibility } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import { MdWaterDrop } from 'react-icons/md';


const InformationCard = ({ visibility, wind, humidity, icon, main }) => {
    const weather_icon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className="info_card">
            <div className="card_content">
                <img src={weather_icon} alt="weather icon" className="weather_icon"/>
                <h1>{main}</h1>
                <hr />
                <h1><MdVisibility /> visibility: {visibility}m</h1>
                <hr />
                <h1><FaWind /> wind speed: {wind}m/s</h1>
                <hr />
                <h1><MdWaterDrop /> humidity: {humidity}%</h1>
            </div>
            <HiInformationCircle className="info_icon" />
        </div>
    );
}

export default InformationCard;