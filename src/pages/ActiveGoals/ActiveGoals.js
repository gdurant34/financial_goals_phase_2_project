import React from 'react';
import Goal from '../../components/Goal/Goal';

function ActiveGoals({ goals, transactions, setTransactions, currentDate, account, setAccount }) {
    const goalsList = goals.map(goal => (
        <Goal 
            key={goal.id} 
            goal={goal} 
            transactions={transactions}
            setTransactions={setTransactions}
            currentDate={currentDate}
            account={account}
            setAccount={setAccount}
        />
    ))

    return (
        <div>
            {goalsList}
        </div>      
    );
}

export default ActiveGoals;