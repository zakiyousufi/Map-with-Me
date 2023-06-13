import React from 'react';
import Carousel from "react-multi-carousel";
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
          value="Select continent"
          onChange={changeState}
          placeholder="Category"
          name="category"
          className='select'
        >
          <option value="Select Continent">SELECT ANY CONTINENT</option>
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
      <Carousel
          additionalTransfrom={3}
          arrows
          autoPlay={true}
          autoPlaySpeed={2000}
          centerMode={true}
          className="slider"
          draggable
          infinite
          keyBoardControl
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 600,
                min: 0
              },
              items: 2,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 600
              },
              items: 3,
              partialVisibilityGutter: 40
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
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
        </Carousel>
      </ul>
    </div>
  );
};

export default Continents;
