import React, { useState } from "react";

function NewGoalForm({ goals, setGoals }) {
    const [name, setName] = useState('');
    const [total, setTotal] = useState('');

    function handleSubmitNewGoal(e) {
        e.preventDefault();

        const newGoal = {
            id: '',
            name: name,
            progress: 0,
            total: total,
            current: 0
        }

        fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newGoal)
        })
            .then(r => r.json())
            .then(savedGoal => setGoals([...goals, savedGoal]))

        setName('');
        setTotal('');
    }

    return (
        <section id="new-goal-form">
            <h2>Add New Goal</h2>
            <form onSubmit={handleSubmitNewGoal}>
                <label>Name
                    <input
                        onChange={(e) => setName(e.target.value)}
                        className="name"
                        type="text"
                        value={name}
                    />
                </label>
                <label>Total
                    <input
                        onChange={(e) => setTotal(e.target.value)}
                        className="total"
                        type="number"
                        value={total}
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </section>
    );
}

export default NewGoalForm;