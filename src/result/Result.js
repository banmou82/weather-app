import axios from "axios";

const API_KEY = "fe6ef17e3c2145af0e5f5e7bc0b9ed0c"; //  Demo API key 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric", // ✅ returns temperature in °C
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("City not found or API error");
  }
};