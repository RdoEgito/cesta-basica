import React, { useState } from 'react';
import './NameComponent.css'; // Importe o arquivo CSS

const NameComponent = ({ onNameChange }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onNameChange(newName);
  };

  return (
    <div className="name-container">
      <label htmlFor="nameInput" className="name-label">
        Nome:
      </label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleInputChange}
        placeholder="Digite seu name"
        className="name-input"
      />
    </div>
  );
};

export default NameComponent;
