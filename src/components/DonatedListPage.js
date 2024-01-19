import './DonatedListPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBanner from './TopBanner';

const DonatedListPage = () => {
    const [databaseItems, setDatabaseItems] = useState([]);
    const [donatedItems, setDonatedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseDonatedItems = await axios.get('https://cesta-basica-api.vercel.app/api/donated-items');
                const responseItems = await axios.get('https://cesta-basica-api.vercel.app/api/items');

                responseDonatedItems.data.map(donatedItem => {
                    const item = responseItems.filter(item => item.key == donatedItem.key)[0];
                    console.log(item);
                    setDonatedItems({
                        name: NamedNodeMap,
                        quantity: quantidade,
                        itemName: item.item
                    });
                });
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <TopBanner />
            <div className='App'>
            <table className="table">
                {/* <thead>
                <tr>
                    <th>Item</th>
                    <th className='col-quantity'>Qtd Necessária</th>
                    <th className='col-quantity'>Qtd Doada</th>
                </tr>
                </thead> */}
                <tbody>
                {donatedItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.itemName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default DonatedListPage;