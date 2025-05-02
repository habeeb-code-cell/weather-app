
import React, { useEffect, useState } from 'react';
// Importing weather CSS to style the Weather component
import './weather.css';

// importing all icons 
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {

  // we create on state variable below where we will store the data that is coming from the api 
  const [weatherData, setWeatherData] = useState(false);

  // we create an object function for icons 
  const allicons = {
    "Old": clear_icon,
    "Oln": clear_icon,
    "O2d": cloud_icon,
    "O2n": cloud_icon,
    "O3d": cloud_icon,
    "O3n": cloud_icon,
    "O4d": drizzle_icon,
    "O4n": drizzle_icon,
    "O9d": rain_icon,
    "O9n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  // A function to enable the api works 
  const search = async (city)=>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      
      //  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}$units=metric&appid=${import.meta.env.VITE_APP_ID}`;  
       // // paste the url in backticks above and change the API key to the one in the environmental variable file.
       //  To add the env link add a $ sign then following with import,meta.env and then the variable

      // before the city name in the curly bracket a $ sign will be added and city name will be changed to from city name to city.
      // we have to get city from the parameter so we have to add city in the async parentensis
      // 
      // in the url we need to add units and metric to endavour it to show i degree celcius(above)


      // to use the fetch api to the data from the url(below)
        const response = await fetch (url);

        // to convert the response using json method
        const data = await response.json();

        // to get this data we will get the weather data from the API 
        console.log(data);

        // provide icon code and if the icon code is not available we use the or operator and cleared icon 
        const icon = allicons[data.weather[0].icon] || clear_icon;

        // after creating a variable to store data coming the api then we can use the setWearherData to store in this weather data state 
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),//to display in interger value
          location:data.name,
          icon: icon
        })

    } catch (error) {
      
    }
  }

  // to call the response function whenever the components get loaded so useEffect will be added 
    useEffect(()=>{
      // you have to provide a city name as a string 
      search("London")
    },[])
      return (
    <div className="weather">
      {/* Search box section */}
      <div className="search-bar">
        <input type="text" placeholder="Search" />

         {/* for the search icon */}
        <img src={search_icon} alt="Search" />
        {/* font isnt looking well so we have to visit Google font */}
      </div>
      
      {/* for weather images and giving them a class name for styling*/}
      <img src={clear_icon} alt="" className="weather-icon"/>

      {/* temperatures will be displayed in passage tags and giving them a classname to style them*/}
      {/* since we are displaying temperature so we can replace them instead */}
      <p className='temperature'> {weatherData.temperature}&deg;C</p>

      {/* P tags for the city names and also giving them a classname to style them */}
      {/* since we are displaying location so we can replace them instead */}
      <p className='Location'>{weatherData.location}</p>

      {/* informations on the weather data  */}
      <div className='weather-data'>
        <div className='column'>
          <img src={humidity_icon} alt="" />
            <div>
              <p>{weatherData.humidity} %</p>
              <span>Humidity</span>
            </div>
        </div>

        <div className='column'>
          <img src={wind_icon} alt="" />
            <div>
              <p> {weatherData.windSpeed} km/h </p>
              <span>Wind Speed</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Weather;
