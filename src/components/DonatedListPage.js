import './DonatedListPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBanner from './TopBanner';
import TableDonatedItem from './TableDonatedItem';
import NavigationButtonComponent from './NavigationButtonComponent';

const DonatedListPage = () => {
    const [donatedItems, setDonatedItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseDonatedItems = await axios.get('https://cesta-basica-api.vercel.app/api/donated-items');
                setDonatedItems(responseDonatedItems.data);
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
            <NavigationButtonComponent
              targetRoute={'/'}
              text={'🏠 Página Inicial'} />
        </>
    );
};

export default DonatedListPage;