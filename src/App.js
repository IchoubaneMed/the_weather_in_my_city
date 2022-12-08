import Header from './components/Header';
import Title from './components/Title';
import HeatCard from './components/HeatCard';
import InformationCard from './components/InformationCard';
import DateCard from './components/DateCard';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // Create the variables city, input, and data 
  // as well as the setCity, setInput, and setData functions via useState hook
  const [city, setCity] = useState("casablanca");
  const [country, setCountry] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  // Create the useEffect function
  useEffect(() => {
    // Retrieve the weather data from the openweather map api via the fetch api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efc7c87235c26a8f4739f0b5fdd3d678`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [city]);

  function handleSubmit(event) {
    event.preventDefault()
    setCity(input.value[0]);
    setCountry(input.value[1]);
  }

  return (



    <div className="App">
      <Header onSubmit={handleSubmit} setInput={setInput} />
      <Title
        city={data !== "" ? data.name : "casablanca"}
        country={country}
        countryCode={data !== "" ? data.sys.country : "MA"}
      />
      <div className="container_1">
        <HeatCard />
        <InformationCard />
        <DateCard />
      </div>
    </div>
  );

}

export default App;
