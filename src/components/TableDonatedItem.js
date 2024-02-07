import './TableDonatedItem.css'
import React from 'react';

const TableDonatedItem = ({ tableItems }) => {
    const itemDictionary = {
        "arroz":         "Arroz",
        "acucar":        "Açúcar",
        "ovos":          "Bandeja com 30 ovos",
        "maria":         "Biscoito Maria",
        "cafe":          "Café",
        "cream-cracker": "Cream Cracker",
        "farinha":       "Farinha",
        "feijao":        "Feijão",
        "cuscuz":        "Flocos de Milho (Cuscuz)",
        "leite":         "Leite em pó",
        "macarrao":      "Macarrão",
        "margarina":     "Margarina",
        "oleo":          "Óleo"
    };

    return (
        <div>
            <table className="database-table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Item</th>
                    <th className='col-quantity'>Qtd</th>
                </tr>
                </thead>
                <tbody>
                {tableItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nome}</td>
                        <td>{itemDictionary[item.key]}</td>
                        <td>{item.quantidade}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableDonatedItem;