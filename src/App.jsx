import { useState } from "react";
import { getWeatherByCity } from "./result/Result";
// import SearchBox from "./components/SearchBox/SearchBox";
import SearchBox from "./components/SearchArea/SearchArea";
import WeatherCard from "./components/Display/Display";
import ErrorMessage from "./components/Message/Message";
import "./App.scss";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError("City not found ❌");
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌤️ Weather App</h1>

      <SearchBox city={city} setCity={setCity} onSearch={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
