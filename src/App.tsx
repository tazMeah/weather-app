import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";

function App() {

  const [city, setCity] = useState("-");
  const [temp, setTemp] = useState("-");
  const [feels, setFeels] = useState("-");
  const [wind, setWind] = useState("-");

  

  // get the city from the input
  function getCity() {
    const inputCity : string = document.querySelectorAll("input")[0].value;
    


    setCity(inputCity);
    console.log("city: " + inputCity);

    // make api call
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&appid=c75be72de3dc82042431f27ccbf29521&units=imperial")
      .then(res => res.json())
      .then(function (result) {
        console.log(result);
        setFeels(result.main.feels_like);
        setWind(result.wind.speed);
        setTemp(result.main.temp);
        console.log("feels: " + feels);
        console.log("temp: " + temp);
        console.log("wind: " + wind);
      })
  }



  return (
    <div className="App">
      <Header/>
      <main>
        <Form getCity={getCity}/>
        <h2>{city}</h2>
        <p>Current Temp: {temp}</p>
        <p>Feels Like: {feels}</p>
        <p>Wind Speed: {wind}mph</p>
      </main>

    </div>
  );
}

export default App;
