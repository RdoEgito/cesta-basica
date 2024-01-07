import './TableItem.css'
import React from 'react';

const TableItem = ({ tableItems }) => {
    return (
        <div>
            <table className="database-table">
                <thead>
                <tr>
                    <th>Item</th>
                    <th className='col-quantity'>Qtd Necessária</th>
                    <th className='col-quantity'>Qtd Doada</th>
                    {/* <th className='col-quantity'>Quanto deseja doar?</th> */}
                </tr>
                </thead>
                <tbody>
                {tableItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.item}</td>
                        <td>{item.quantidadeNecessaria}</td>
                        <td>{item.quantidadeDoada}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableItem;