import React from 'react';
import GoalsList from '../../components/GoalsList/GoalsList';

function Goals({ handleSubmit, setTransactions, input, setInput, goals }) {

    return (
        <div>
            <h1>Active Goals Page!</h1>
            <div>
                <GoalsList 
                    handleSubmit={handleSubmit} 
                    setTransactions={setTransactions} 
                    input={input} 
                    setInput={setInput} 
                    goals={goals}
                />
            </div>
        </div>
    );
}

export default Goals;