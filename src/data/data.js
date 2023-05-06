import { v4 as uuidv4 } from 'uuid';
import asia from '../images/asia.svg';
import africa from '../images/africa.svg';
import europe from '../images/europe.svg';
import oceania from '../images/oceania.svg';
import northAmerica from '../images/north america.svg';
import southAmerica from '../images/south america.svg';
import antarctic from '../images/antarctica.svg';

const continentsOfTheWorld = [
  {
    id: uuidv4(),
    name: 'Africa',
    map: '',
    image: africa,
  },
  {
    id: uuidv4(),
    name: 'Asia',
    map: '',
    image: asia,
  },
  {
    id: uuidv4(),
    name: 'Europe',
    map: '',
    image: europe,
  },
  {
    id: uuidv4(),
    name: 'Oceania',
    map: '',
    image: oceania,
  },
  {
    id: uuidv4(),
    name: 'North America',
    map: '',
    image: northAmerica,
  },
  {
    id: uuidv4(),
    name: 'South America',
    map: '',
    image: southAmerica,
  },
  {
    id: uuidv4(),
    name: 'Antarctic',
    map: '',
    image: antarctic,
  },
];

export default continentsOfTheWorld;
