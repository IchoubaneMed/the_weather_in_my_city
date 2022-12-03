import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div className="header_form">
                <h1>The Weather In My City</h1>
                <form onSubmit={props.onSubmit}>
                    <input type="text" placeholder="Enter you city name here..." value={props.input} onChange={props.onChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;