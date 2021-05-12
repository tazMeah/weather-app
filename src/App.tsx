import React, { useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState("Detroit");


  // get the city from the input
  function getCity() {
    const inputCity = document.querySelectorAll("input")[0].value;

    setCity(inputCity);
    console.log("city: " + inputCity);

    // make api call
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
      .then(res => res.json())
      .then(function (res) {
        console.log(res) 
      })
  }



  return (
    <div className="App">
      <header>
        <h1>Weather</h1>
      </header>
      <main>
        <form>
          <label>City: </label>
          <input type="text" placeholder="Enter your city..." ></input>
          <button type="button" onClick={getCity}>Search</button>
        </form>
        <h2>{city}</h2>
        <p>Current Temp: 40</p>
        <p>Feels Like: 35</p>
        <p>Wind Speed: 3mph</p>
      </main>

    </div>
  );
}

export default App;
