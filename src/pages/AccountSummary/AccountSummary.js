import React from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import "./AccountSummary.css";
import TransactionForm from '../../components/TransactionForm/TransactionForm';


function AccountSummary({ transactions, account }) {
    // const [account, setAccount] = useState([]);
    // const [transactions, setTransactions] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3000/account")
    //         .then(r => r.json())
    //         .then(setAccount);

    //     fetch(" http://localhost:3000/transactions")
    //         .then(r => r.json())
    //         .then(setTransactions)
    // }, [])

    const { name, balance  } = account;



    return (
        <div>
            <h1>Account Summary</h1>
            <div className="display-container">
                <div className="account-container">
                    <div className="account">
                        <h3>Account</h3>
                            {name} ${parseFloat(balance).toFixed(2)}
                        </div>
                        <div>
                            <TransactionForm />
                        </div>
                    </div>
                </div>
                <div className="transactions">
                    <TransactionList transactions={transactions} />
                </div>
        </div>
    );
}

export default AccountSummary;