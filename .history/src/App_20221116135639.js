import React from "react";

const API = {
  key: "7c4092d79abc60f9232f47c267983d56",
  link: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=",
};

function App() {
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
      </main>
    </div>
  );
}

export default App;
