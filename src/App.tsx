import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {

  const api = {
    key : "c75be72de3dc82042431f27ccbf29521",
    url : "api.openweathermap.org/data/2.5/weather?q="
  }

  return (
    <div className="App">
      <Header/>
      <Form/>
      <Result/>
    </div>
  );
}

export default App;
