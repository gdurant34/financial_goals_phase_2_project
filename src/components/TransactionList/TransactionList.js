import React from 'react';
import Transaction from '../Transaction/Transaction';
import './TransactionList.css';

function TransactionList({ transactions }) {
    const transactionList = transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
    ))


    return (
        <div className='parent-container'>
            <div className='title'>
                <h3>Transactions</h3>
            </div>
            <div className='table-container'>
                <table className="table">
                    <tbody>
                        <tr className='table-rows'>
                            <th className='category'>
                                <h4 className="">Category</h4>
                            </th>
                            <th className='category'>
                                <h4 className="">Date</h4>
                            </th>
                            <th className='category'>
                                <h4 className="">Amount</h4>
                            </th>
                        </tr>
                        {transactionList}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionList;