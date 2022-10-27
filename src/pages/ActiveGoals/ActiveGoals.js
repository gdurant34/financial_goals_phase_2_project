import React from 'react';
import GoalsList from '../../components/GoalsList/GoalsList';

function Goals({ handleSubmit, input, setInput, goals }) {

    return (
        <div>
            <h1>Active Goals</h1>
            <div>
                <GoalsList 
                    handleSubmit={handleSubmit} 
                    input={input} 
                    setInput={setInput} 
                    goals={goals}
                />
            </div>
        </div>
    );
}

export default Goals;