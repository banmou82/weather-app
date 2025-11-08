
import "./Display.scss";

function WeatherCard({ weather }) {
  const { name, main, weather: info, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${info[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={info[0].description} />
      <h3>{info[0].main}</h3>
      <p className="temp">{Math.round(main.temp)}°C</p>
      <div className="details">
        <p>💧 Humidity: {main.humidity}%</p>
        <p>🌬️ Wind: {Math.round(wind.speed)} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
