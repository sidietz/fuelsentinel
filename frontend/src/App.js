import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AvgPrice from "./components/AvgPrice";
import AvgPriceArea from "./components/AvgPriceArea";

function App() {

  const [viewAll, setViewAll] = useState(true);
  const onClickAll = () => setViewAll(viewAll ? false : true)

  return (
    <div className="App">
      <header className="App-header">
        <h1>fuelsentinel
        </h1>

        {viewAll
          ? <input type="button" className="btn btn-primary" value="Alle" onClick={onClickAll} />
          : <input type="button" className="btn btn-secondary" value="Alle" onClick={onClickAll} />
        }


        <div>
        <h2>Täglich</h2>
          {viewAll
            ?  <AvgPrice url="day" name="Datum"></AvgPrice>
            : <AvgPriceArea url="day" name="Datum"></AvgPriceArea>
          }

          <h2>Wöchtenlich</h2>
          {viewAll
            ?  <AvgPrice url="week" name="KW"></AvgPrice>
            : <AvgPriceArea url="week" name="KW"></AvgPriceArea>
          }
        </div>

        <div>
        <p>Von den Machern von <a style={{color: 'pink', }} href="https://plantwatch.de">plantwatch.de</a>.</p>
      </div>
      </header>
      
    </div>
  );
}

export default App;
