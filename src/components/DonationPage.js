import './DonationPage.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableItem from './TableItems';
import TopBanner from './TopBanner';
import SelectComponent from './SelectComponent';
import NameComponent from './NameComponent';
import SendButton from './SendButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationButtonComponent from './NavigationButtonComponent';
import SpinnerComponent from './SpinnerComponent';

const DonationPage = () => {
  const [databaseItems, setDatabaseItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [userName, setUserName] = useState('');
  const [loadingTable, setLoadingTable] = useState(false);

  useEffect(() => {
  const fetchData = async () => {
      try {
        setLoadingTable(true);

        const response = await axios.get('https://cesta-basica-api.vercel.app/api/items');
        setDatabaseItems(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
      finally {
        setLoadingTable(false);
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
    <>
      <TopBanner />
      <div className='App'>
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

            <NavigationButtonComponent
              targetRoute={'/lista'}
              text={'📃 Lista de doações'} />
          </div>
          <div className='flex-item'>
            <TableItem
              tableItems={databaseItems} />
            <SpinnerComponent
                loading={loadingTable} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DonationPage;
