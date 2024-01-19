import './TopBanner.css';
import React from 'react';
import logo from './images/logo.png'

const TopBanner = () => {
  return (
    <div className='top-banner'>
      <img src={logo} alt='Logo IP Mandacaru' />
      {/* <div>
        <p>Cesta Básica</p>
      </div> */}
    </div>
  );
}

export default TopBanner;
