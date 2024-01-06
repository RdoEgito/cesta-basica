import './TableItem.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TableItem = ({ onChangeQuantity }) => {
    const [databaseItems, setDatabaseItems] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);

    const handleSelectChange = (itemKey, itemName, itemValue) => {
        if (selectedValues.find(item => item.key === itemKey)) {
            const newItens = selectedValues.map(item =>
                item.key === itemKey ? { ...item, value: itemValue} : item);
            console.log("if", newItens);
            setSelectedValues({selectedValues: newItens});
            console.log("if", selectedValues);
        } else {
            const newItem = {
                key: itemKey,
                name: itemName,
                value: itemValue
            };
            console.log("else", newItem)
            setSelectedValues({selectedValues: [...selectedValues, newItem]});
            console.log("else", selectedValues);
        }
        
        const selectedItems = selectedValues
            .filter(item => item.value > 0)
            // .map(item => ({ name: item, value: selectedValues[item] }));
        console.log("Selected Items:", selectedItems);
        
        onChangeQuantity(selectedItems);
      };
    
    // useEffect(() => {
    //     fetch('https://cesta-basica-api.vercel.app/api/items') // Rota definida no servidor para obter os itens
    //     .then(response => response.json())
    //     .then(data => {
    //         // Atualiza o estado com os dados obtidos do backend
    //         setDatabaseItems(data);

    //         console.log(data);

    //         databaseItems.forEach(item => {
    //             setSelectedValues([...selectedValues, {
    //                 key: item.key,
    //                 name: item.item,
    //                 value: 0
    //                 }]);
    //                 console.log(selectedValues);
    //         });
    //     })
    //     .catch(error => console.error('Erro ao buscar os itens:', error));
    // }, []);

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

    return (
        <div>
            <table className="database-table">
                <thead>
                <tr>
                    <th>Item</th>
                    <th className='col-quantity'>Qtd Necessária</th>
                    <th className='col-quantity'>Qtd Doada</th>
                    <th className='col-quantity'>Quanto deseja doar?</th>
                </tr>
                </thead>
                <tbody>
                {databaseItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.quantidadeNecessaria}</td>
                    <td>{item.quantidadeDoada}</td>
                    <td>
                        <select onChange={(e) => handleSelectChange(item.key, item.item, parseInt(e.target.value))} className='custom-select'>
                            {[...Array(item.quantidadeNecessaria - item.quantidadeDoada + 1).keys()].map((i) => (
                                <option key={i} value={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableItem;