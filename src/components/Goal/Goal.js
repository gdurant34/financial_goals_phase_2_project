import React, { useState } from 'react';
import ContributionForm from '../ContributionForm/ContributionForm';
import "./Goal.css";

function Goal({ goal, currentDate, transactions, setTransactions  }) {
    const { progress, name, total, current } = goal;
    const [inputGoal, setInputGoal] = useState('');


  function handleSubmitGoal(e) {
    e.preventDefault();
    console.log(e.target[0].name)
    const newTransaction = {
      id: "",
      category: e.target[0].name,
      date: currentDate, 
      amount: inputGoal
    }

    fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
            "content-Type" : "application/json"
        },
        body: JSON.stringify(newTransaction)
    })
        .then(r => r.json())
        .then(savedTransaction => setTransactions([...transactions, savedTransaction]));
    
      setInputGoal('');
  }

    return (
      <div className='card'>
        <div className='name'>
          <h3>{name.toUpperCase()}</h3>
        </div>
        <div className='total'>
          <h3>{total}</h3>
        </div>
        <div className='current'>
          <h3>{current}</h3>
        </div>
        <div className='progress'>
          <h3>{progress}</h3>
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