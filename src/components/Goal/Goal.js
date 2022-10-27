import React, { useState } from 'react';
import ContributionForm from '../ContributionForm/ContributionForm';
import "./Goal.css";

function Goal({ goals, goal, currentDate, transactions, setTransactions, account, setAccount, setGoals }) {
  const { progress, name, total, current } = goal;
  const [inputGoal, setInputGoal] = useState('');

  function updateCurrent(updatedAmount) {
    const updatedGoals = goals.map(goal => goal.id === updatedAmount.id ? updatedAmount : goal);
    setGoals(updatedGoals)
  }


  function handleSubmitGoal(e) {
    e.preventDefault();

    const newTransaction = {
      id: "",
      category: e.target[0].name,
      date: currentDate(),
      amount: inputGoal
    }

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(r => r.json())
      .then(savedTransaction => setTransactions([...transactions, savedTransaction]));


    const newAccountBalance = {
      ...account,
      balance: (account.balance - inputGoal)
    }
      
    fetch(`http://localhost:3000/account`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAccountBalance)
    })
      .then(r => r.json())
      .then(setAccount)


    const newCurrentAmount = {
      current: (parseInt(goal.current) + parseInt(inputGoal))
    }

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCurrentAmount)
    })
      .then(r => r.json())
      .then(updateCurrent)

    setInputGoal('');
  }

  return (
    <div className='card'>
      <div className='name'>
        <h3>{name.toUpperCase()}</h3>
      </div>
      <div className='total'>
        <div>Total: {total}</div>
      </div>
      <div className='current'>
        <div>Current: {current}</div>
      </div>
      <div className='progress'>
        <div>Progress: {progress}</div>
      </div>
      <div>
        <ContributionForm
          handleSubmit={handleSubmitGoal}
          setInput={setInputGoal}
          input={inputGoal}
          goalName={name}
        />
      </div>
    </div>
  );
}

export default Goal;