import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/countrydetails.scss';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);
  return (
    <div className="details">
      {countries.map((country) => (
        <div className='details-container' key={country?.name.common}>
          <div className="map">
            <MapContainer
              center={{ lat: country?.latlng[0], lng: country?.latlng[1] }}
              zoom={5.5}
              scrollWheelZoom={false}
              className='c-map'
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={{ lat: country?.latlng[0], lng: country?.latlng[1] }}
              >
                <Popup>
                  {country?.name}
                  <br />
                  {country?.name}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className='contry-details'>
            <div className="item">
              <p>Time Zone(s):</p>
              <p>
                <strong>{country?.timezones}</strong>
              </p>
            </div>
            <div className="item">
              <p>Offical Name: </p>
              <p>
                <strong>{country?.name.official}</strong>
              </p>
            </div>
            <div className="item">
              <p>Population: </p>
              <p>
                <strong>{country?.population}</strong>
              </p>
            </div>
            <div className="item">
              <p>Capital: </p>
              <p>
                <strong>{country?.capital}</strong>
              </p>
            </div>
            <div className="item">
              <p>Language(s) :</p>
              <p>{Object.values(country?.languages)} </p>
            </div>
            <div className="item">
              <p>Coat Of Arms</p>
              <img src={country?.coatOfArms.svg} alt="awesome coat 0f arm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
