import React from 'react';
import TransactionList from '../../components/TransactionList/TransactionList';
import "./AccountSummary.css";
import TransactionForm from '../../components/TransactionForm/TransactionForm';


function AccountSummary({ transactions, account, handleSubmit, input, setInput, selected, setSelected, onChange }) {
    const { name, balance  } = account;
    console.log(balance)
    // const displayBalance = balance.toFixed(2)

    return (
        <div>
            <h1>Account Summary</h1>
            <div className="display-container">
                <div className="account-container">
                    <div className="account">
                        <h3>Account</h3>
                            {name}: ${balance}
                        </div>
                        <div>
                            <TransactionForm  
                                handleSubmit={handleSubmit}
                                input={input}
                                setInput={setInput}
                                selected={selected}
                                setSelected={setSelected}
                                onChange={onChange}
                            />
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