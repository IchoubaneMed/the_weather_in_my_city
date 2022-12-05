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
    { value: ["Asmara", "Asmara"], label: ["Asmara", " - Asmara"] },
    { value: ["Asuncion", "Paraguay"], label: ["Asuncion", " - Paraguay"] },
    { value: ["Athens", "Greece"], label: ["Athens", " - Greece"] },
    { value: ["Auckland", "New Zealand"], label: ["Auckland", " - New Zealand"] },
    { value: ["Avarua", "Cook Islands"], label: ["Avarua", " - Cook Islands"] },
    { value: ["Baghdad", "Iraq"], label: ["Baghdad", " - Iraq"] },
    { value: ["Baku", "Azerbaijan"], label: ["Baku", " - Azerbaijan"] },
    { value: ["Bamako", "Mali"], label: ["Bamako", " - Mali"] },
    { value: ["Banda Aceh", "Indonesia"], label: ["Banda Aceh", " - Indonesia"] },
    { value: ["Bandar Seri Begawan", "Brunei"], label: ["Bandar Seri Begawan", " - Brunei"] },
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