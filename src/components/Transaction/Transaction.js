import React from 'react';
import bigDecimal from 'js-big-decimal';

function Transaction({ transaction }) {
    const { category, date, amount } = transaction;

    return (
      <tr>
        <td>{category}</td>
        <td>{date}</td>
        <td>${bigDecimal.getPrettyValue(amount)}</td>
      </tr>
    );
  }

export default Transaction;