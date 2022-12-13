import "./Pollution.css";
import { GiGasMask } from 'react-icons/gi';


const Pollution = ({ airQuality, components }) => {

    const airIndex = {
        "1": "Good",
        "2": "Fair",
        "3": "Moderate",
        "4": "Poor",
        "5": "Very Poor",
    }

    return (
        <div className="pollution_card">
            <div className="card_content">
                <h1>Air Quality: {airIndex[airQuality.toString()]}</h1>
                <hr />
                <h5>Carbon monoxide (CO): {components.co} μg/m<sup>3</sup></h5>
                <h5>Nitrogen monoxide (NO): {components.no} μg/m<sup>3</sup></h5>
                <h5>Nitrogen dioxide (NO<sub>2</sub>): {components.no2} μg/m<sup>3</sup></h5>
                <h5>Ozone (O<sub>3</sub>): {components.o3} μg/m<sup>3</sup></h5>
                <h5>Sulphur dioxide (SO<sub>2</sub>): {components.so2} μg/m<sup>3</sup></h5>
                <h5>Ammonia (NH<sub>3</sub>): {components.nh3} μg/m<sup>3</sup></h5>
            </div>
            <GiGasMask className="mask_icon" />
        </div>
    );
}

export default Pollution;