import Header from './components/Header';
import './App.css';
import {useState} from 'react';

function App() {

  const [city, setCity] = useState('Toronto');
  const [input, setInput] = useState("");

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
      {city}
    </div>
  );
}

export default App;
