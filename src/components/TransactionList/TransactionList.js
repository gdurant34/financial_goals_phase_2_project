import React from 'react';
import Transaction from '../Transaction/Transaction';

function TransactionList({ transactions }) {
    const transactionList = transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
    ))


    return (
        <>
            <div>
                <h1>Transactions</h1>
            </div>
            <table className="">
                <tbody>
                    <tr>
                        <th>
                            <h3 className="">Category</h3>
                        </th>
                        <th>
                            <h3 className="">Date</h3>
                        </th>
                        <th>
                            <h3 className="">Description</h3>
                        </th>
                        <th>
                            <h3 className="">Amount</h3>
                        </th>
                    </tr>
                    {transactionList}
                </tbody>
            </table>
        </>

    );
}

export default TransactionList;