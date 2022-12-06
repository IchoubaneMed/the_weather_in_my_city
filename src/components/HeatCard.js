import "./HeatCard.css";
import {CiTempHigh} from 'react-icons/ci';

const HeatCard = () => {
    return (
        <div className="card">
            <div className="card_content">
                <h1>24 °C</h1>
                <hr />
                <h1>76 °F</h1>
            </div>
            <CiTempHigh className="CiTempHigh"/>
        </div>
    );
}

export default HeatCard;