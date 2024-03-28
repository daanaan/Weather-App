import React, { useState, useEffect } from 'react';
import './styles/style.css';
import './styles/media-queries.css';
import cloud from './images/cloud.svg';
import profile from './images/profile-btn.svg';
import weather from './images/weather-btn.svg';
import explore from './images/explore-btn.svg';
import settings from './images/settings-btn.svg';
import activityFirst from './images/activity-1.svg';
import activitySecond from './images/activity-2.svg';
import activityThird from './images/activity-3.svg';
import activityFourth from './images/activity-4.svg'; 
import forecastIcon1 from './images/icon-forecast-1.svg';
import forecastIcon2 from './images/icon-forecast-2.svg';
import forecastIcon3 from './images/icon-forecast-3.svg';
import forecastIcon4 from './images/icon-forecast-4.svg';
import forecastIcon5 from './images/icon-forecast-5.svg';
import forecastIcon6 from './images/icon-forecast-6.svg';
import forecastIcon7 from './images/icon-forecast-7.svg';
import icon1 from './images/icon-1.svg';
import icon2 from './images/icon-2.svg';
import icon3 from './images/icon-3.svg';
import icon4 from './images/icon-4.svg';
import icon5 from './images/icon-5.svg';
import clock from './images/icon-clock.svg';
import drop from './images/icon-drop.svg';
import wind from './images/icon-wind.svg';
import geo from './images/icon-geo.svg';
import citybtn from './images/city-btn.svg';
import prevbtn from './images/prev-btn.svg';
import nextbtn from './images/next-btn.svg';
/*import { getWeatherByCity } from './api/weather-appAPI';*/

function App() {
  
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!inputVisible);
  };

/*const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = 'YourCity'; // Replace 'YourCity' with the desired city
  const apiKey = 'YourAPIKey'; // Replace 'YourAPIKey' with your actual OpenWeatherMap API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherByCity(city, apiKey);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city, apiKey]);

  // Render weather data here
};

*/


  return (
    <>
    <div className="main-page">
    <div className="container">
      <div className="upper-part-block">
      

      <div className="main-page__city-info">
        
       
      <p className="city-info__city-name">
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="25px" className="loc-icon" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        New York
      </p>
      <button className="city-info__button" onClick={toggleInputVisibility}>
        <img src={citybtn} alt="city button" />
      </button>
      {inputVisible && (
        <input
          type="text"
          id="cityInput"
          placeholder="Enter city"
          className="city-input"
        />
      )}
      
        <div className="errors">
          <p>Write correct city</p>
        </div>
        <p className="city-info__p">Cloudy</p>
      <div className="city-info__weather-info">
        <p className="city-info__degrees">26°C</p>
        <p className="city-info__date">Sunday | 12 Dec 2023</p>
      </div>
      </div>


      <div className="main-page__img">
        <img src={cloud} width="321px" height="255px" alt='cloudy-weather' className="cloud-icon"/>
      </div>
      </div>
     
     
     
     <div className="sections">
      <div className="nav-bar">
        <button className="nav-bar__profile-btn">
          <img src={profile} width="60px" height="60px" alt="profile-img" className="profile-pic" />
        </button>
        <button className="nav-bar__weather-btn">
          <img src={weather} width="50px" height="50px" alt="weather-img" className="weather-pic" />
          weather
        </button>
        <button className="nav-bar__explore-btn">
          <img src={explore} width="37" height="37" alt="explore-img" className="explore-pic" />
          explore
        </button>
        <button className="nav-bar__cities-btn">
         <img src={geo} width="37" height="42" alt="geo-img" className="geo-pic" />
          cities
        </button>
        <button className="nav-bar__settings-btn">
          <img src={settings} width="43" height="43" alt="settings-img" className="settings-pic" />
          settings
        </button>
      </div>

      
  <div className="center-blocks">
     <div className="activities">
        <p className="activities__activities-text">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" className="heart-icon" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          Activities in your area
        </p>



      <div className="activities-blocks">
      <div className="activities-blocks__activity-1">
            <img src={activityFirst} width="178" height="108" alt="activity-1" className="activities-img" />
            <p className="activities-blocks__text">2km away</p>
          </div>


        <div className="activities-blocks__activity-2">
            <img src={activitySecond} width="178" height="108" alt="activity-2" className="activities-img" />
            <p className="activities-blocks__text">1.5km away</p>
        </div>

        <div className="activities-blocks__activity-3">
            <img src={activityThird} width="178" height="108" alt="activity-3" className="activities-img" />
            <p className="activities-blocks__text">3km away</p>
        </div>

        <div className="activities-blocks__activity-4">
            <img src={activityFourth} width="178" height="108" alt="activity-4" className="activities-img" />
            <p className="activities-blocks__text">500m away</p>
          </div>
        </div>
      </div>



        

      <div className="forecast">
        <div className="forecast__text">
          <p>24-hour forecast</p>
        </div>
        
        <div className="forecast__blocks">
          <div className="block1">
            <p className="block1__degrees">26°</p>
            <span></span>
            <img src={forecastIcon1} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">11.7km/h</p>
            <p className="forecast-details">Now</p>
          </div>
          <div className="block2">
            <p className="block2__degrees">26°</p>
            <img src={forecastIcon2} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">9.3km/h</p>
            <p className="forecast-details">22:00</p>
          </div>
          <div className="block3">
            <p className="block3__degrees">22°</p>
            <img src={forecastIcon3} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">12km/h</p>
            <p className="forecast-details">00:00</p>
          </div>
          <div className="block4">
            <p className="block4__degrees">16°</p>
            <img src={forecastIcon4} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">15km/h</p>
            <p className="forecast-details">2:00</p>
          </div>
          <div className="block5">
            <p className="block5__degrees">20°</p>
            <img src={forecastIcon5} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">15km/h</p>
            <p className="forecast-details">4:00</p>
          </div>
          <div className="block6">
            <p className="block6__degrees">22°</p>
            <img src={forecastIcon6} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">15km/h</p>
            <p className="forecast-details">6:00</p>
          </div>
          <div className="block7">
            <p className="block7__degrees">16°</p>
            <img src={forecastIcon7} width="24px" height="19px" alt="icon-weather" className="forecast-img" />
            <p className="forecast-details">15km/h</p>
            <p className="forecast-details">8:00</p>
          </div>
        </div>
      </div>
      </div>
 


<div className="weatherOfTheDay-block">
  <div className="weatherOfTheDay-block__week">
    <div className="weather-carousel">
        <button className="carousel-control-prev" type="button">
        <img src={prevbtn} alt="Previous"/>  
        </button>
      <div className="weather-carousel-item">
        <p className="weatherOfTheDay-block__day-fri">Fri</p>
        <img src={icon1} width="20" height="19" alt='icon' className="day-icon" />
      </div>
      <div className="weather-carousel-item">
        <p className="weatherOfTheDay-block__day-sat">Sat</p>
        <img src={icon2} width="24" height="24" alt='icon' className="day-icon" />
      </div>
      <div className="weather-carousel-item active">
        <p className="weatherOfTheDay-block__day-sun">Sun</p>
        <img src={icon3} width="31" height="23" alt='icon' className="day-icon" />
      </div>
      <div className="weather-carousel-item">
        <p className="weatherOfTheDay-block__day-mon">Mon</p>
        <img src={icon4} width="26" height="26" alt='icon' className="day-icon" />
      </div>
      <div className="weather-carousel-item">
        <p className="weatherOfTheDay-block__day-tues">Tues</p>
        <img src={icon5} width="20" height="19" alt='icon' className="day-icon" />
      </div>
      <button className="carousel-control-next" type="button">
      <img src={nextbtn} alt="Next"/>
    </button>
    </div>
  </div>

  <p className="weatherOfTheDay-block__time">
  <img src={clock} width="14px" height="14px" alt='clock' className="clock-icon" />
    8:00pm gmt</p>
  

  <div className="weatherOfTheDay-block__conditions">
    <p className="weatherOfTheDay-block__text">Air conditions</p>

    <div className="conditions">
      <p className='conditions_temp'>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 320 512">
          <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/>
        </svg>
        Real Feel <br/>30°
      </p>
      <p className='conditions_wind'>
        <img src={wind} width="20px" height="18px" alt='wind' />
        Wind <br/>0.8 km/h
      </p>
      <p className='conditions_rain'>
        <img src={drop} width="16px" height="21px" alt='rain' />
        Chance of rain<br/>2%
      </p>
      <p className='conditions_uvIndex'>
        <img src={icon2} width="22px" height="22px" alt='UV index' />
        UV Index<br/>4
      </p>
    </div>
  </div>
</div>
  </div>

  </div>
</div>
  </>
  );
}

export default App;

