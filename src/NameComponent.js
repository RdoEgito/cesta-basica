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
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={handleInputChange}
        placeholder="Digite seu nome"
        className="name-input"
      />
    </div>
  );
};

export default NameComponent;
