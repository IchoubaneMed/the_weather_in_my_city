import "./DateCard.css";
import {BsFillCalendarWeekFill} from 'react-icons/bs';


const DateCard = () => {
    return(
        <div className="date_card">
            <div className="card_content">
                <p>
                    Monday, 28th Nov 22 3:07 am
                </p>
            </div>
            <BsFillCalendarWeekFill className="date_icon"/>
        </div>
    );
}

export default DateCard;