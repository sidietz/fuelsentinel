import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import AvgPrice from "./components/AvgPrice";

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <h1>
          fuelsentinel
        </h1>

        <h3>Täglich</h3>
        <AvgPrice url="day" name="Datum"></AvgPrice>

        <h3>Wöchentlich</h3>
        <AvgPrice url="week" name="KW"></AvgPrice>

        
        <div>
        <p>Von den Machern von <a style={{color: 'pink', }} href="https://plantwatch.de">plantwatch.de</a>.</p>
      </div>
      </header>
      
    </div>
  );
}

export default App;
