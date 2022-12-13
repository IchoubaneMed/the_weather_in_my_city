import "./DateCard.css";
import {MdOutlineAccessTimeFilled} from 'react-icons/md';


const DateCard = ({date, time_12}) => {

    return(
        <div className="date_card">
            <div className="card_content">
                <h1>{date}</h1>
                <h1>{time_12}</h1>
            </div>
            <MdOutlineAccessTimeFilled className="date_icon"/>
        </div>
    );
}

export default DateCard;