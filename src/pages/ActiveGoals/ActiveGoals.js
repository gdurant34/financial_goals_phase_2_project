import React from 'react';
import Goal from '../../components/Goal/Goal';
import NewGoalForm from '../../components/NewGoalForm/NewGoalForm';

function ActiveGoals({ goals, transactions, setTransactions, currentDate, account, setAccount, setGoals }) {
    const goalsList = goals.map(goal => (
        <Goal 
            key={goal.id} 
            goal={goal} 
            transactions={transactions}
            setTransactions={setTransactions}
            currentDate={currentDate}
            account={account}
            setAccount={setAccount}
            setGoals={setGoals}
            goals={goals}
        />
    ))

    return (
        <div>
            <div>
                {goalsList}
            </div>
            <div>
                <NewGoalForm 
                    goals={goals}
                    setGoals={setGoals}
                />
            </div>
        </div>      
    );
}

export default ActiveGoals;