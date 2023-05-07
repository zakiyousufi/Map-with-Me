import React from 'react';
import Continents from './Continents';
import '../styles/worldpage.scss';
import worldImg from '../images/world.svg'

const WorldPage = () => {
  return (
    <>
      <div className="world_map" data-testid="home-link">
        <div className="world_map_container">
          <img className='world-map' src={worldImg} alt="world-image" />
          <h2>World MAP</h2>
        </div>
        <div className="stats">
          <h3>STATES BY CONTINENTS</h3>
        </div>
          <Continents />
      </div>
    </>
  );
};

export default WorldPage;
