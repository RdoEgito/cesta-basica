import './DonatedListPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBanner from './TopBanner';
import TableDonatedItem from './TableDonatedItem';

const DonatedListPage = () => {
    const [donatedItems, setDonatedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("COMEÇANDO...");
                const responseDonatedItems = await axios.get('https://cesta-basica-api.vercel.app/api/donated-items');
                setDonatedItems(responseDonatedItems.data);
                // console.log(responseDonatedItems);
                // const responseItems = await axios.get('https://cesta-basica-api.vercel.app/api/items');
                // console.log(responseItems);

                // responseDonatedItems.data.map(donatedItem => {
                //     const item = responseItems.filter(item => item.key == donatedItem.key)[0];
                //     console.log(item);
                //     setDonatedItems({
                //         name: donatedItem.nome,
                //         quantity: donatedItem.quantidade,
                //         itemName: item.item
                //     });
                // });
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <TopBanner />
            <TableDonatedItem tableItems={donatedItems} />
        </>
    );
};

export default DonatedListPage;