import './Item.css'
import React, { useState, useEffect } from 'react';

const Item = ({ onChangeQuantity, onChangeItemToDonate }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/itemsToDonate')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao buscar dados');
            }
            return response.json();
          })
          .then(data => {
            setData(data);
          })
          .catch(error => {
            console.error('Erro ao buscar dados:', error);
          });
      }, []);
    
      const handleNumberChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedQuantity(selectedValue);
        onChangeQuantity(selectedValue);
      };
    
      const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        onChangeItemToDonate(selectedValue);
      };

    return (
        <div>
            <br />
            <label htmlFor="numberSelect">Selecione um número de 1 a 3:</label>
            <select className='select-quantity' id="numberSelect" value={selectedQuantity} onChange={handleNumberChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <label htmlFor="itemToDonateSelect">Opções do GET:</label>
            <select className='select-quantity' id="itemToDonateSelect" value={selectedOption} onChange={handleOptionChange}>
                <option value="">Selecione uma opção</option>
                {data.map((option, index) => (
                <option key={index} value={option.item.value}>{option.item.value}</option>
                ))}
            </select>


            {/* <select className='select-quantity' onChange={onChangeQuantity}>
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
            </select> */}
        </div>
    );
};

export default Item;
