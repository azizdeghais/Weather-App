import React,{useState} from "react";

const API = {
  key: "7c4092d79abc60f9232f47c267983d56",
  link: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState('');

const search=evt=>{
  if ( evt.key === "Enter"){
    fetch(`${API.link}weather?`)
  }
}

  const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day= days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year= d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  
  
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="location-box">
<div className="location">New York City, US</div>
<div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
        <div className="temp">
          15°C
        </div>
        <div className="weather">
          Sunny
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
