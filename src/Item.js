import './Item.css'
import React, { useState, useEffect } from 'react';

const Item = ({ handleQuantityChange, handleSelectedItemChange }) => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/items') // Rota definida no servidor para obter os itens
      .then(response => response.json())
      .then(data => {
        // Atualiza o estado com os dados obtidos do backend
        setItemsList(data);
      })
      .catch(error => console.error('Erro ao buscar os itens:', error));
  }, []);

  return (
    <div>
      <select className='select-quantity' onChange={handleQuantityChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select className='select-item' onChange={handleSelectedItemChange}>
        {itemsList.map(item => (
          <option key={item._id} value={item.item}>
            {item.item} - {item.quantidadeNecessaria}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Item;
