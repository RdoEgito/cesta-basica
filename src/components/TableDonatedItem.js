import './TableDonatedItem.css'
import React from 'react';

const TableDonatedItem = ({ tableItems }) => {
    return (
        <div>
            <table className="database-table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Item</th>
                    <th className='col-quantity'>Quantidade</th>
                </tr>
                </thead>
                <tbody>
                {tableItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nome}</td>
                        <td>{item.key}</td>
                        <td>{item.quantidade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableDonatedItem;