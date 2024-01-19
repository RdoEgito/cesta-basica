import React, { useState, useEffect } from 'react';
// import DonationComponent from './DonationComponent'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './DonationComponent.css'
import axios from 'axios';
import TableItem from './TableItems';
import TopBanner from './TopBanner';
import SelectComponent from './SelectComponent';
import NameComponent from './NameComponent';
import SendButton from './SendButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationComponent = () => {
  const [databaseItems, setDatabaseItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [userName, setUserName] = useState('');

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
          
          <SendButton
            isButtonEnabled={userName !== '' && selectedItem !== '' && selectedQuantity > 0}
            item={selectedItem}
            name={userName}
            quantity={selectedQuantity} />
        </div>
        <div className='flex-item'>
          <TableItem
            tableItems={databaseItems} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={DonationComponent}></Route>
    </div>
  </Router>
);

export default App;
