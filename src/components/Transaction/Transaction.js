import React from 'react';

function Transaction({ transaction }) {
    const { category, date, amount } = transaction;

    return (
      <tr>
        <td>{category}</td>
        <td>{date}</td>
        <td>{amount}</td>
      </tr>
    );
  }

export default Transaction;