import react from 'react';
import '../styles/navbar.scss';
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>
        Made with
        {' '}
        <span className='love'>
          <AiFillHeart />
        </span>
        {' '}
        by Ahmad Zaki Yousufi
      </p>
   </footer>
  );
};

export default Footer;
