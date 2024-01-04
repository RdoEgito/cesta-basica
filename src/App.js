import './App.css'
import React, { useState } from 'react';
import TableItem from './TableItems';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleQuantityChange = (s) => {
    console.log(s)
    setSelectedItems(s)
  }

  return (
    <div className='App'>
      <h2>Cesta Básica - IP Mandacaru</h2>
      <div className='flex-container'>
        <div className='flex-item'>
          <TableItem onChangeQuantity={handleQuantityChange} />
        </div>
        <div className='flex-item'>
            <h2>Itens Selecionados</h2>
            <ul>
                {selectedItems.map((item, index) => (
                <li key={index}>{item.name} - {item.value}</li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
