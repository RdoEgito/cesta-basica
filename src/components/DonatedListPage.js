import './DonatedListPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBanner from './TopBanner';
import TableDonatedItem from './TableDonatedItem';
import NavigationButtonComponent from './NavigationButtonComponent';
import SpinnerComponent from './SpinnerComponent';

const DonatedListPage = () => {
    const [donatedItems, setDonatedItems] = useState([]);
    const [loadingTable, setLoadingTable] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingTable(true);

                const responseDonatedItems = await axios.get('https://cesta-basica-api.vercel.app/api/donated-items');
                setDonatedItems(responseDonatedItems.data);
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
            finally {
                setLoadingTable(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <TopBanner />

            <TableDonatedItem tableItems={donatedItems} />
            <SpinnerComponent
                loading={loadingTable} />
            <NavigationButtonComponent
              targetRoute={'/'}
              text={'🏠 Página Inicial'} />
        </>
    );
};

export default DonatedListPage;