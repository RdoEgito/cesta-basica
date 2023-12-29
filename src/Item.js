import './Item.css'
import React from 'react';

const Item = ({ quantities, itemsToDonate, onChangeQuantity, onChangeItemToDonate }) => {
  return (
    <div>
        <br />
        <select className='select-quantity' onChange={onChangeQuantity}>
            {quantities.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
        </select>
        <select className='select-item' onChange={onChangeItemToDonate}>
            {itemsToDonate.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
        </select>
    </div>
    

    
  );
};

export default Item;
