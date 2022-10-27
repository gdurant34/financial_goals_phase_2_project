import React from 'react';
import Goal from '../Goal/Goal';

function GoalsList({ goals, handleSubmit, setTransactions, input, setInput }) {
    console.log(goals)
    const goalsList = goals.map(goal => (
        <Goal 
            key={goal.id} 
            goal={goal} 
            handleSubmit={handleSubmit} 
            setTransactions={setTransactions} input={input} 
            setInput={setInput}  
        />
    ))


    return (
        <div>
            {goalsList}
        </div>      
    );
}

export default GoalsList;