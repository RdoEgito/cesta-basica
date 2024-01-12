import React from 'react';
import axios from 'axios';
import './SendButton.css';

const SendButton = ({ item, quantity, name }) => {
  const handleDonation = async () => {
    try {
      const apiUrl = 'https://cesta-basica-api.vercel.app/api/items-donated';

      const requestData = { key: item, quantity, name };

      const response = await axios.post(apiUrl, requestData);

      console.log('Resposta da API:', response.data);
    } catch (error) {
      console.error('Erro ao doar item:', error);
    }
  };

  return (
    <div className="button-container">
      <button className="send-button" onClick={handleDonation}>
        Enviar
      </button>
    </div>
  );
};

export default SendButton;
