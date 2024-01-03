import './App.css';
import React, { useState } from 'react';
import Item from './Item';
import TodoList from './TodoList';

const App = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedItemToDonate, setSelectedItemToDonate] = useState('Opção 1');

  const quantities = [1, 2, 3, 4]
  const itemsToDonate = ['Opção 1', 'Opção 2', 'Opção 3'];

  const handleSelectQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleSelectItemToDonateChange = (event) => {
    setSelectedItemToDonate(event.target.value);
  };

  return (
    <div>
      <h1>Exemplo de Select Component</h1>
      <Item onChangeQuantity={handleSelectQuantityChange} onChangeItemToDonate={handleSelectItemToDonateChange}/>
      <p>Você selecionou: {selectedQuantity} - {selectedItemToDonate}</p>
    </div>
  );
};

export default App;
