import React, { useEffect, useState } from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';


function AccountSummary() {
    const [account, setAccount] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/account")
            .then(r => r.json())
            .then(setAccount);

        fetch(" http://localhost:3000/transactions")
            .then(r => r.json())
            .then(setTransactions)
    }, [])

    const { name, balance  } = account;
    console.log(name, balance)

    return (
        <div>
            <h1>Account Summary Page!</h1>
            <div>
               
            </div>
            <div>
                <TransactionList transactions={transactions} />
            </div>
        </div>
    );
}

export default AccountSummary;