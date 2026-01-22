import React, { useState, useEffect } from 'react';
// Make sure these are at the top of your file
import axios from 'axios';
import { WiDaySunny } from 'weather-icons-react';

<WiDaySunny size={48} color="#fff" />


function App() {
   const [cityInput, setCityInput] = useState(''); // Stores what's in the search bar
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const getClothingAdvice = (temp) => {
  if (temp < 10) return "🥶 It's cold — wear a jacket!";
  if (temp < 20) return "🧥 It's cool — consider a sweater.";
  if (temp < 30) return "👕 It's warm — light clothes are fine.";
  return "🔥 It's hot — stay hydrated and wear breathable clothes.";
};

  // Inside the App component function:

// In App.jsx, inside the fetchWeatherData function:

// In App.jsx, inside the App component function:

// In App.jsx, inside the fetchWeatherData function:

const fetchWeatherData = async (city) => {
  const API_KEY = "4c02821e4a2aec1a8120e28c9baa4733"; // Replace with your real key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    setLoading(true);
    const response = await axios.get(url);
    setWeatherData(response.data);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching weather:", error);
    setWeatherData(null);
    setLoading(false);
  }
};


// Use useEffect to fetch data when component mounts (e.g., load a default city)
useEffect(() => {
    fetchWeatherData('London'); // Load London initially
}, []); 



  // Inside the return statement:

// In App.jsx, inside your return(...) statement:

return (
  
  
  <div className="weather-dashboard">
    {/* ... your input and button code here ... */}
    <input
  type="text"
  value={cityInput}
  onChange={(e) => setCityInput(e.target.value)}
  placeholder="Enter a city"
/>
<button onClick={() => fetchWeatherData(cityInput)}>Search</button>
 
 {loading && <p>Loading weather data...</p>}

    
    {weatherData ? (
      <div className="weather-results">
        <h2>{weatherData.name}</h2>
        <p>🌡️ Temperature: {weatherData.main.temp}°C</p>
<p>🌥️ Conditions: {weatherData.weather[0].description}</p>
<p>💧 Humidity: {weatherData.main.humidity}%</p>
<p>{getClothingAdvice(weatherData.main.temp)}</p>

      </div>
    ) : (
      // This part only shows if weatherData is null (e.g., on first load or an error)
      <p>Enter a city to see the weather, or check the console for errors.</p>
    )}
  </div>
);


}

export default App;