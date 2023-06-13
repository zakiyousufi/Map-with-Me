import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Audio } from  'react-loader-spinner'
import "react-multi-carousel/lib/styles.css";
import { fetchCountryDetails } from '../redux/countries/countries';
import '../styles/countries.scss';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
  };
  if (countries?.length === 0){
    return(
      <div className='loader-container'>
      <Audio
        height = "40"
        width = "40"
        radius = "9"
        color = '#fff'
        ariaLabel = 'three-dots-loading'     
        wrapperStyle
        wrapperClass
      />
      Loading...
    </div>
    )
  } else {
  return (
    <div className="countries">
      <h2 className='select-country'>for more details Select a country</h2>
      <ul className="row">
        {' '}
        <>
          {countries.map((country) => (
          <>
          <Link to={`/:/${country?.name.common}`}>
            <div className='container' onClick={() => handleClick(country?.name.common)}>
              <li key={country?.name.common}>
              <div className="list">
                <h2>{country?.name.common}</h2>
              </div>
              <img src={country?.flags.png} alt="flag" />
              <div className="item">
                <p>Capital:</p>
                <p>{country?.capital}</p>
              </div>
              <div className="item">
                <p>TimeZone:</p>
                <p>{country?.timezones[0]}</p>
              </div>
            </li>
            </div>
          </Link>
          </>
          ))}
        </>
      </ul>
    </div>
  );
  }
};

export default Countries;
