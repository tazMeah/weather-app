import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <Result />
      </main>
    </div>
  );
}

export default App;
