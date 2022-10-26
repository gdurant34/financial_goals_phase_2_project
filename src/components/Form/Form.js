import React, { useState } from "react";

function Form({ onFormSubmit }){
    const [formType, setFormType] = useState(true)
    const [activeGoalData, setactiveGoalData] = useState({
        name: "",
        progress: ""
    })
    const [completedactiveGoalData, setcompletedactiveGoalData] = useState({
        name: "",
        completed: ""
    })

    const handleFormTypeChange = () => {
        setFormType(!formType);
    }

    const handleChange = (e) => {
        if(formType){
            setactiveGoalData({
                ...activeGoalData,
                [e.target.name]: e.target.value,
              })
        } else{
            setcompletedactiveGoalData({
                ...completedactiveGoalData,
                [e.target.name]: e.target.value,
              });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        let type;
        if(formType){ type = "goals"}
            else{ type = "completed-goals"}

        fetch(`http://localhost:3000/${type}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formType ? activeGoalData : completedactiveGoalData)
            })
                .then(res => res.json())
                .then(newData => onFormSubmit(newData, type))

        formType ? 
        setactiveGoalData({name: "", progress: ""}) : 
        setcompletedactiveGoalData({name: "", completed: ""})
    };


    return(
        <section id="form-section">
            <h2>Add a new goal or an completed goal:</h2>
            <form onSubmit={handleSubmit}>
                <select 
                    name="form-type"
                    onChange={handleFormTypeChange}
                    >
                    <option value="goal">Active Goal</option>
                    <option value="completed-goal">Completed Goal</option>
                </select>
                <input 
                    onChange={handleChange}
                    className="description"
                    type="text"
                    placeholder="Description"
                    name="name"
                    value={formType ? activeGoalData.name : completedactiveGoalData.name}
                    />
                
                { 
                // Ternary operator to determine which kind of form we are completing, based off of the dropdown selection.
                formType ?
                    <label>% Complete
                    <input 
                        onChange={handleChange}
                        type="number"
                        placeholder="0"
                        name="progress"
                        value={activeGoalData.progress}
                        />
                    </label> : 
                    <label>Completion Date:
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="Ex. June 2022"
                        name="completed"
                        value={completedactiveGoalData.completed}
                        />
                    </label>
                }
                <button type="submit">Add</button>
            </form>
        </section>
    );
}

export default Form;