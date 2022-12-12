import './Header.css';
import Select from 'react-select';

const options = [
    { value: ["Abidjan", "Ivory Coast"], label: ["Abidjan", " - Ivory Coast"] },
    { value: ["Abu Dhabi", "United Arab Emirates"], label: ["Abu Dhabi", " - United Arab Emirates"] },
    { value: ["Abuja", "Nigeria"], label: ["Abuja", " - Nigeria"] },
    { value: ["Accra", "Ghana"], label: ["Accra", " - Ghana"] },
    { value: ["Addis Ababa", "Ethiopia"], label: ["Addis Ababa", " - Ethiopia"] },
    { value: ["Ahmedabad", "India"], label: ["Ahmedabad", " - India"] },
    { value: ["Aleppo", "Syria"], label: ["Aleppo", " - Syria"] },
    { value: ["Alexandria", "Egypt"], label: ["Alexandria", " - Egypt"] },
    { value: ["Algiers", "Algeria"], label: ["Algiers", " - Algeria"] },
    { value: ["Almaty", "Kazakhstan"], label: ["Almaty", " - Kazakhstan"] },
    { value: ["Amman", "Jordan"], label: ["Amman", " - Jordan"] },
    { value: ["Amsterdam", "Netherlands"], label: ["Amsterdam", " - Netherlands"] },
    { value: ["Anchorage", "United States"], label: ["Anchorage", " - United States"] },
    { value: ["Andorra la Vella", "Andorra"], label: ["Andorra la Vella", " - Andorra"] },
    { value: ["Ankara", "Turkey"], label: ["Ankara", " - Turkey"] },
    { value: ["Antananarivo", "Madagascar"], label: ["Antananarivo", " - Madagascar"] },
    { value: ["Apia", "Samoa"], label: ["Apia", " - Samoa"] },
    { value: ["Arnold", "United States"], label: ["Arnold", " - United States"] },
    { value: ["Ashgabat", "Turkmenistan"], label: ["Ashgabat", " - Turkmenistan"] },
    { value: ["Asmara", "Eritrea"], label: ["Asmara", " - Eritrea"] },
    { value: ["Asuncion", "Paraguay"], label: ["Asuncion", " - Paraguay"] },
    { value: ["Athens", "Greece"], label: ["Athens", " - Greece"] },
    { value: ["Auckland", "New Zealand"], label: ["Auckland", " - New Zealand"] },
    { value: ["Avarua", "Cook Islands"], label: ["Avarua", " - Cook Islands"] },
    { value: ["Baghdad", "Iraq"], label: ["Baghdad", " - Iraq"] },
    { value: ["Baku", "Azerbaijan"], label: ["Baku", " - Azerbaijan"] },
    { value: ["Bamako", "Mali"], label: ["Bamako", " - Mali"] },
    { value: ["Banda Aceh", "Indonesia"], label: ["Banda Aceh", " - Indonesia"] },
    { value: ["Bandar Seri Begawan", "Brunei"], label: ["Bandar Seri Begawan", " - Brunei"] },

    { value: ["Bandung", "Indonesia"], label: ["Bandung", " - Indonesia"] },
    { value: ["Bangkok", "Thailand"], label: ["Bangkok", " - Thailand"] },
    { value: ["Bangui", "Central African Republic"], label: ["Bangui", " - Central African Republic"] },
    { value: ["Banjul", "Gambia"], label: ["Banjul", " - Gambia"] },
    { value: ["Barcelona", "Spain"], label: ["Barcelona", " - Spain"] },
    { value: ["Barranquilla", "Colombia"], label: ["Barranquilla", " - Colombia"] },
    { value: ["Basrah", "Iraq"], label: ["Basrah", " - Iraq"] },
    { value: ["Basse-Terre", "Guadeloupe"], label: ["Basse-Terre", " - Guadeloupe"] },
    { value: ["Basseterre", "Saint Kitts and Nevis"], label: ["Basseterre", " - Saint Kitts and Nevis"] },
    { value: ["Beijing", "China"], label: ["Beijing", " - China"] },
    { value: ["Beirut", "Lebanon"], label: ["Beirut", " - Lebanon"] },
    { value: ["Bekasi", "Indonesia"], label: ["Bekasi", " - Indonesia"] },
    { value: ["Belem", "Brazil"], label: ["Belem", " - Brazil"] },
    { value: ["Belgrade", "Serbia"], label: ["Belgrade", " - Serbia"] },
    { value: ["Belmopan", "Belize"], label: ["Belmopan", " - Belize"] },
    { value: ["Belo Horizonte", "Brazil"], label: ["Belo Horizonte", " - Brazil"] },
    { value: ["Bengaluru", "India"], label: ["Bengaluru", " - India"] },
    { value: ["Berlin", "Germany"], label: ["Berlin", " - Germany"] },
    { value: ["Bern", "Switzerland"], label: ["Bern", " - Switzerland"] },
    { value: ["Bishkek", "Kyrgyzstan"], label: ["Bishkek", " - Kyrgyzstan"] },
]

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '2px dotted #ccccccff',
        color: state.isSelected ? '#1a1a1aff' : '#ccccccff',
        backgroundColor: state.isSelected ? '#ffcc00ff' : '#1a1a1aff',
    })
}

const Header = (props) => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div className="header_form">
                <h1>The Weather In My City</h1>
                <form onSubmit={props.onSubmit}>
                    {/*<input type="text" placeholder="Enter you city name here..." value={props.input} onChange={props.onChange}/>*/}
                    <Select className="input"
                        options={options}
                        styles={customStyles}
                        placeholder="Enter your city name here..."
                        onChange={props.setInput}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;