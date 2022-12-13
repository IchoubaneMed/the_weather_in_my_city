import Header from './components/Header';
import Title from './components/Title';
import HeatCard from './components/HeatCard';
import InformationCard from './components/InformationCard';
import DateCard from './components/DateCard';
import Map from './components/Map';
import Pollution from './components/Pollution';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // Create the variables city, input, and data 
  // as well as the setCity, setInput, and setData functions via useState hook
  const [city, setCity] = useState("casablanca");
  const [country, setCountry] = useState("Morocco");
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    "coord": { "lon": -7.6192, "lat": 33.5928 },
    "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }],
    "base": "stations",
    "main": { "temp": 290, "feels_like": 289.88, "temp_min": 289.27, "temp_max": 290, "pressure": 1008, "humidity": 82 },
    "visibility": 10000,
    "wind": { "speed": 2.68, "deg": 300 },
    "rain": { "1h": 0.19 },
    "clouds": { "all": 31 },
    "dt": 1670097671,
    "sys": { "type": 2, "id": 47681, "country": "MA", "sunrise": 1670051912, "sunset": 1670088139 },
    "timezone": 3600,
    "id": 2553604,
    "name": "Casablanca",
    "cod": 200
  });

  const [pollutionData, setPollutionData] = useState({
    "coord": [
      50,
      50
    ],
    "list": [
      {
        "dt": 1605182400,
        "main": {
          "aqi": 1
        },
        "components": {
          "co": 201.94,
          "no": 0.01,
          "no2": 0.77,
          "o3": 68.66,
          "so2": 0.64,
          "pm2_5": 0.5,
          "pm10": 0.54,
          "nh3": 0.12
        }
      }
    ]
  });
  // Create the lat, lon variables and setLat, setLon functions via useState hook
  const [lat, setLat] = useState(data.coord.lat);
  const [lon, setLon] = useState(data.coord.lon);

  // Create the timeZone variable and its setTimeZone function using the useState hook
  const [timeZone, setTimeZone] = useState({
    "timezone": "Australia/Brisbane",
    "timezone_offset": 10,
    "date": "2020-12-21",
    "date_time": "2020-12-21 23:49:16",
    "date_time_txt": "Monday, December 21, 2020 23:49:16",
    "date_time_wti": "Mon, 21 Dec 2020 23:49:16 +1000",
    "date_time_ymd": "2020-12-21T23:49:16+1000",
    "date_time_unix": 1608558556.584,
    "time_24": "23:49:16",
    "time_12": "11:49:16 PM",
    "week": "52",
    "month": "12",
    "year": "2020",
    "year_abbr": "20",
    "is_dst": false,
    "dst_savings": 0
  });


  // Create the useEffect function 
  useEffect(() => {
    // Retrieve the weather data from the openweather map api via the fetch api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efc7c87235c26a8f4739f0b5fdd3d678`)
      .then(res => res.json())
      .then(data => setData(data))
  }, [city]);

  useEffect(() => {
    setLat(data.coord.lat);
    setLon(data.coord.lon);
  }, [data.coord.lat, data.coord.lon]);

  //Create the useEffect function to retrieve the air pollution data
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=efc7c87235c26a8f4739f0b5fdd3d678`)
      .then(res => res.json())
      .then(data => setPollutionData(data))
  }, [lat, lon])


  //Create the useEffect function to retrieve the time zone data
  useEffect(() => {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=b87755dda51d4c6fb2e92e8f2d3920e8&lat=${lat}&long=${lon}`)
      .then(res => res.json())
      .then(data => setTimeZone(data))
  }, [lat, lon])



  function handleSubmit(event) {
    event.preventDefault()
    setCity(input.value[0]);
    setCountry(input.value[1]);
  }

  return (



    <div className="App">
      <Header onSubmit={handleSubmit} setInput={setInput} />
      <Title
        city={data.name}
        country={country}
        countryCode={data.sys.country}
      />
      <div className="container_1">
        <HeatCard temp={data.main.temp} />

        <InformationCard
          visibility={data.visibility}
          wind={data.wind.speed}
          humidity={data.main.humidity}
          icon={data.weather[0].icon}
          main={data.weather[0].main}
        />
        <DateCard date={timeZone.date} time_12={timeZone.time_12}/>
      </div>

      <div className="container_2">
        <Map lon={data.coord.lon} lat={data.coord.lat} />
        <Pollution airQuality={pollutionData.list[0].main.aqi} components={pollutionData.list[0].components} />
      </div>


    </div>
  );

}

export default App;
