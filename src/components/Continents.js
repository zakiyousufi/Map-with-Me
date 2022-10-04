import React, { useState } from 'react';
import continents from '../data/data';
import { useParams } from 'react-router';
import { getCountries } from '../redux/countries/countries';
import '../styles/continents.scss';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

export default Continents;
