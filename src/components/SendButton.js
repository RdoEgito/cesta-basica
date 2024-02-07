import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './SendButton.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendButton = ({ isButtonEnabled, item, quantity, name }) => {
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    setButtonEnabled(isButtonEnabled);
  }, []);

  const handleDonation = async () => {
    try {
      setButtonEnabled(false);

      const itemsDonatedApiUrl = 'https://cesta-basica-api.vercel.app/api/items-donated';
      const itemsToDonateApiUrl = 'https://cesta-basica-api.vercel.app/api/items-to-donate';

      const donatedRequestData = { key: item, quantity, name };
      const toDonateRequestData = { key: item, quantity };

      const responseDonated = await axios.post(itemsDonatedApiUrl, donatedRequestData);
      console.log('Resposta da API:', responseDonated.data);

      const responseToDonate = await axios.post(itemsToDonateApiUrl, toDonateRequestData);
      console.log('Resposta da API:', responseToDonate.data);

      console.log(responseDonated.status, responseToDonate.status)
      if (responseDonated.status === 201
        && responseToDonate.status === 201){
          toast.success('Obrigado pela sua doação! Em caso de dúvidas ou caso queira alterar a sua doação, procure um dos diáconos');
          setTimeout(() => {window.location.reload();}, 5000);
        }

    } catch (error) {
      toast.error('Infelizmente, não foi possível processar sua doação. Tente novamente mais tarde!')
      console.error('Erro ao doar item:', error);
    }
  };

  return (
    <div className="button-container">
      <button
        disabled={!buttonEnabled}
        className={buttonEnabled ? 'send-button' : 'send-button-disabled'} onClick={handleDonation}>
        ✔️ Enviar
      </button>
    </div>
  );
};

export default SendButton;
