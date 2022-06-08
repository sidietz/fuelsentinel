import React, { useState, useEffect } from 'react';

import AvgPriceAreaList from "./AvgPriceAreaList";

function AvgPriceArea(props) {

    const [area, setArea] = useState("2");
  
    return (
      <div className='prices'>
        <div>
          <input type="submit" className="btn btn-secondary" value="Aachen" onClick={() => setArea("2")} />
          <input type="submit" className="btn btn-secondary" value="Annaberg-Buchholz" onClick={() => setArea("3")} />
          <input type="submit" className="btn btn-secondary" value="Ansbach" onClick={() => setArea("0")} />
          <input type="submit" className="btn btn-secondary" value="Hamburg" onClick={() => setArea("4")} />
          <input type="submit" className="btn btn-secondary" value="Potsdam" onClick={() => setArea("1")}/>
          <input type="submit" className="btn btn-secondary" value="Stuttgart" onClick={() => setArea("5")} />
        </div>
        <AvgPriceAreaList area={area} url={props.url} name={props.name}></AvgPriceAreaList>
      </div>
    );
  }

  export default AvgPriceArea;
