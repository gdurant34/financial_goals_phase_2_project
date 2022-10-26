import React from "react";

function CompletedGoalItem({ completedGoal, onDeleteClick }) {
    const {id, name, completed} = completedGoal;

    const handleDelete = () => {
        let type = "completed-goal";
        onDeleteClick(id, type)
    }

    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p>{name}</p>
            <p><b className="label">Completed: {completed}</b></p>
        </div>
    );
};

export default CompletedGoalItem;