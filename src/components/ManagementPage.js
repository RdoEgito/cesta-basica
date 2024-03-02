import React  from 'react';
import axios from 'axios';
import './ManagementPage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagementPage = () => {
  const handleReset = async () => {
    try {
      const resetDonationsApiUrl = 'https://cesta-basica-api.vercel.app/api/reset-donations';

      const response = await axios.put(resetDonationsApiUrl);
      console.log('Resposta da API:', response.status, response.data);

      if (response.status === 204){
          toast.success('Quantidades zeradas com sucesso!');
          setTimeout(() => {window.location.reload();}, 6000);
        }

    } catch (error) {
      toast.error('Infelizmente, não foi possível processar. Tente novamente mais tarde!')
      console.error('Erro ao zerar as quantidades:', error);
    }
  };

  return (
    <div className="button-container">
      <button
        onClick={handleReset}>
        ⚠️☠️🚨 Zerar Quantidades
      </button>
    </div>
  );
};

export default ManagementPage;
