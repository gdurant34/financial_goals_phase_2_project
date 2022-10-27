import React, { useState } from "react";

function ContributionForm({handleSubmit, setInput, input, goalName }) {


    return (
        <section id="contribution-form">
            <form onSubmit={ handleSubmit }>
                <label> Amount
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        className="amount"
                        type="number"
                        name={goalName}
                        value={input}
                    />
                </label>
                <button type="submit">Add Money</button>
            </form>
        </section>
    );
}

export default ContributionForm;