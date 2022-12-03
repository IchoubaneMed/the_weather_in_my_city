import Header from './components/Header';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  // Create the variables city, input, and data 
  // as well as the setCity, setInput, and setData functions via useState hook
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  // Create the useEffect function
  useEffect(() => {
    // Retrieve the weather data from the openweather map api via the fetch api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efc7c87235c26a8f4739f0b5fdd3d678`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [city]);

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setCity(input);
  }

  return (
    <div className="App">
      <Header onSubmit={handleSubmit} input={input} onChange={handleChange}/>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
