import { TiLocation } from 'react-icons/ti';
import ReactCountryFlag from "react-country-flag";
import "./Title.css";

const Title = (props) => {
    return (
        <div className="title">
            <h1><TiLocation /> {props.city}, {props.country} </h1>
            
            <ReactCountryFlag
                countryCode={props.countryCode}
                svg
                style={{
                    width: '50px',
                    height: '50px',
                    marginLeft: '15px',
                }}
            />
            
        </div>
    );
}

export default Title;