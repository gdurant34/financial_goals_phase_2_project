import React from 'react';
import Transaction from '../Transaction/Transaction';

function TransactionList({ transactions }) {
    const transactionList = transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
    ))


    return (
        <>
            <div>
                <h3>Transactions</h3>
            </div>
            <table className="">
                <tbody>
                    <tr>
                        <th>
                            <h4 className="">Category</h4>
                        </th>
                        <th>
                            <h4 className="">Date</h4>
                        </th>
                        <th>
                            <h4 className="">Amount</h4>
                        </th>
                    </tr>
                    {transactionList}
                </tbody>
            </table>
        </>

    );
}

export default TransactionList;