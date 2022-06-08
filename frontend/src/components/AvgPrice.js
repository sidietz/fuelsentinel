import React, { useState, useEffect } from 'react';

function AvgPrice(props) {
  
    const [prices, setPrices] = useState([{'prices': 0}]);
  
    useEffect(() => {
      fetch('http://localhost:5000/' + props.url).then(res => res.json()).then(data => {
        setPrices(data['prices']);
      });
    }, []);
  
    return (
          <div className='prices'>
          <table>
          <thead>
          <tr>
            <th>{ props["name"] }</th>
            <th>Diesel</th>
            <th>Super E5</th>
            <th>Super E10</th>
          </tr>
          </thead>
          <tbody>
          {prices.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.date}</td>
                <td>{val.diesel}</td>
                <td>{val.e5}</td>
                <td>{val.e10}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
          </div>
    );
  }

  export default AvgPrice;
