import React from 'react';
import { fetchCountries } from '../redux/countries/countries';
import { getCategory } from '../redux/countries/categories';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/continents.scss';

const Continents = () => {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountries(name));
  };
  const changeState = (e) => {
    dispatch(getCategory(e.target.value));
  };
  return (
    <div className="continents">
      <label htmlFor="category-select">
        <select
          type="text"
          value="Select Continent"
          onChange={changeState}
          placeholder="Category"
          name="category"
          className='select'
        >
          <option value="All">ALL</option>
          <option value="Africa">AFRICA</option>
          <option value="Europe">EUROPE</option>
          <option value="Oceania">OCEANIA</option>
          <option value="Asia">ASIA</option>
          <option value="North America">NORTH AMERICA</option>
          <option value="South America">SOUTH AMERICA</option>
          <option value="Antarctic">ANTARCTICA</option>
        </select>
      </label>
      <ul className="continents_list">
        {categories.map(({ id, name, image }) => (
          <li key={id}>
            <Link to={`/${name}`}>
              <div onClick={() => handleClick(name)} >
              <img src={image} alt="country" />
              <h2>{name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Continents;
