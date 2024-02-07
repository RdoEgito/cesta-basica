import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButtonComponent.css'

const NavigationButtonComponent = ({ targetRoute, text }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(targetRoute);
  };

  return (
    <div className="button-container">
      <button className='navigation-button' onClick={handleButtonClick}>
        {text}
      </button>
    </div>
  );
};

export default NavigationButtonComponent;
