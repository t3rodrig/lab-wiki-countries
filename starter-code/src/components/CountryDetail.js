import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = (props) =>  {
  const { name,  capital, area, borders } = props;
  return(
    <Fragment>
      <h1>{name}</h1>
      <table className="table">
      <thead></thead>
        <tbody>
            <tr>
              <td style={{"width": "30%"}}>Capital</td>
              <td>{capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                  <ul>
                  {borders.map((item, index) => {
                    return <li key={index}><Link to={`/${Object.keys(item)[0]}`}>{Object.values(item)[0]}</Link></li>
                  })}
                  </ul>
              </td>
            </tr>
        </tbody>
      </table>
    </Fragment>
  );
}


export default CountryDetail;