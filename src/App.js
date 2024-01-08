import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TableItem from './TableItems';
import TopBanner from './TopBanner';
import SelectComponent from './SelectComponent';
import NameComponent from './NameComponent';

const App = () => {
  const [databaseItems, setDatabaseItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [userName, setUserName] = useState(0);

  useEffect(() => {
  const fetchData = async () => {
      try {
        const response = await axios.get('https://cesta-basica-api.vercel.app/api/items');
        setDatabaseItems(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const handleNameChange = (newName) => {
    setUserName(newName);
  }

  const handleItemChange = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const handleNumberChange = (selectedNumber) => {
    setSelectedQuantity(selectedNumber);
  };

  return (
    <div className='App'>
      <TopBanner />
      <div className='flex-container'>
        <div className='flex-item'>
          <NameComponent
            onNameChange={handleNameChange} />
          <SelectComponent
            itemList={databaseItems}
            onItemChange={handleItemChange}
            onNumberChange={handleNumberChange} />
          
          {selectedItem && selectedQuantity !== null && ( // Verifica se ambos os valores estão selecionados
            <p>
              Item selecionado: {selectedItem}, Número selecionado: {selectedQuantity}
            </p>
          )}
        </div>
        <div className='flex-item'>
          <TableItem
            tableItems={databaseItems} />
        </div>
      </div>
    </div>
  );
};

export default App;
