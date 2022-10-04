import React, { useState } from 'react';
import continents from '../data/data';
import { useParams } from 'react-router';
import { getCountries } from '../redux/countries/countries';
import '../styles/continents.scss';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const Continents = () => {
  const { idName } = useParams();
  const dispatch = useDispatch();
  const countriesOfContinent = useSelector((state) => state.countries);
  console.log('fdfd', countriesOfContinent);
  const handleClick = (name) => {
    dispatch(getCountries(name, idName));
  };

export default Continents;
