import React, { useState } from "react";



function TransactionForm({handleSubmit, input, setInput, onChange, selected }) {


    return (
        <section id="transaction-for-section">
            <h2>New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label> Category
                    <select onChange={onChange} value={selected}>
                        <option value="">Select</option>
                        <option name="AddMoney" value="AddMoney" >
                            Add Money
                        </option>
                        <option name="RemoveMoney" value="RemoveMoney" >
                            Remove Money
                        </option>
                    </select>
                </label>
                <label> Amount
                    <input 
                        onChange={(e) => setInput(e.target.value)}
                        className="amount"
                        type="number"
                        name="amount"
                        value={input}
                    />
                </label>
                <button type="submit">New Transaction</button>
            </form>
        </section>
    );
}

export default TransactionForm;