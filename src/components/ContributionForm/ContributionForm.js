import React, { useState } from "react";

function ContributionForm({handleSubmit}) {

    // function currentDate() {
    //     const currentDate = new Date();
    //     return currentDate.toISOString().split('T')[0];
    // }


    // // need to create a container to hold states and fetch request to pass to all the pages. 
    // function handleSubmit(e) {
    //     e.preventDefault();

    //     const newTransaction = {
    //         id: "",
    //         category: e.target,
    //         date: currentDate(), 
    //         amount: input
    //     }

    //     fetch("http://localhost:3000/transactions", {
    //         method: "POST",
    //         headers: {
    //             "content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(newTransaction)
    //     })
    //         .then(r => r.json())
    //         .then(setTransactions)
    // }

    return (
        <section id="contribution-form">
            <form onSubmit={handleSubmit}>
                <label> Amount
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        className="amount"
                        type="number"
                        name="amount"
                        value={input}
                    />
                </label>
                <button type="submit">Add Money</button>
            </form>
        </section>
    );
}

export default ContributionForm;