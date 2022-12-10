import "./HeatCard.css";
import {RiTempColdFill} from 'react-icons/ri';

const HeatCard = (props) => {
    const celsius = (props.temp - 273.15).toFixed(1);
    const fahrenheit = ((props.temp - 273.15) * 9/5 + 32).toFixed(1);
    return (
        <div className="card">
            <div className="card_content">
                <h1>{celsius} °C</h1>
                <hr />
                <h1>{fahrenheit} °F</h1>
            </div>
            <RiTempColdFill className="CiTempHigh"/>
        </div>
    );
}


export default HeatCard;