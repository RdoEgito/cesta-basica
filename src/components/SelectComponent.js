import './SelectComponent.css';
import React, { useState } from 'react';

const SelectComponent = ({ itemList, onItemChange, onNumberChange }) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(9);

  const handleItemChange = (e) => {
    const value = e.target.value;

    setSelectedItem(value);

    const selected = itemList.filter(i => i.key === value)[0];
    setMaxNumber(
      getNeededQuantity(
        selected.quantidadeNecessaria,
        selected.quantidadeDoada
      )
    );
    onItemChange(value);
  };

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);

    setSelectedNumber(value);
    onNumberChange(value);
  };

  const getNeededQuantity = (neededQuantity, donatedQuantity) => {
    if (donatedQuantity >= neededQuantity){
      return 0;
    }

    return neededQuantity - donatedQuantity;
  }

  return (
    <div className="select-container">
      <select className="select-dropdown" value={selectedItem} onChange={handleItemChange}>
          <option disabled value="">-- Selecione um item --</option>
          {itemList.map((item, index) => (
          <option key={index} value={item.key}>
              {item.item}
          </option>
          ))}
      </select>
      <br />
      <select className="select-dropdown" value={selectedNumber} onChange={handleNumberChange}>
        <option disabled value={0}>-- Selecione a quantidade --</option>
        {[...Array(maxNumber).keys()].map((number) => (
          <option key={number + 1} value={number + 1}>
            {number + 1}
          </option>
        ))}
      </select> 
      <br />
    </div>
  );
};

export default SelectComponent;
