const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div >
                <h1>The Weather In My City</h1>
                <form>
                    <label >Enter you city name here...</label>
                    <input type="text"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;