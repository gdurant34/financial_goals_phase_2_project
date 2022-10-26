import React, { createFactory } from "react";



function TransactionForm() {




    return (
        <section id="transaction-for-section">
            <h2>New Transaction</h2>
            <form>
                <label> Category
                    <select>
                        <option>
                            Active Goal 1
                        </option>
                        <option>
                            Active Goal 2
                        </option>
                        <option>
                            Active Goal 3
                        </option>
                    </select>
                </label>
                <label> Date
                    <input 
                        className="date" 
                        type="date"
                    />
                </label>
                <label> Description
                    <input 
                        className="description"
                        type="text"
                        name="description"
                        value=""
                    />
                </label>
                <label> Amount
                    <input 
                        className="amount"
                        type="number"
                        name="amount"
                        value=""
                    />
                </label>
            </form>
        </section>
    );
}

export default TransactionForm;