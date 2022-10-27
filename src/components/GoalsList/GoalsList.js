import React from 'react';
import Goal from '../Goal/Goal';

function GoalsList({ goals, handleSubmit, input, setInput }) {
    const goalsList = goals.map(goal => (
        <Goal 
            key={goal.id} 
            goal={goal} 
            handleSubmit={handleSubmit} 
            input={input} 
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