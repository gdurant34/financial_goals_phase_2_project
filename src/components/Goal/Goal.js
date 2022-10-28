import React, { useEffect, useState } from 'react';
import { addNumbers, divNum, multiplyNum, subNumbers } from '../../utils/NumberHelper';
import ContributionForm from '../ContributionForm/ContributionForm';
import bigDecimal from 'js-big-decimal';
import ProgressBar from '../ProgressBar';
import "./Goal.css";


function Goal({ goals, goal, currentDate, transactions, setTransactions, account, setAccount, setGoals }) {
  const { progress, name, total, current } = goal;
  const [inputGoal, setInputGoal] = useState('');

  function updateCurrent(updatedGoal) {

    const updatedGoalsList = goals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal);
    setGoals(updatedGoalsList)
  }

  function updateProgress(updatedPercent) {
    const undatedGoals = goals.map(goal => goal.id === updatedPercent.id ? updatedPercent : goal);
    setGoals(undatedGoals)
  }

  useEffect(() => {
    const newProgress = {
      progress: multiplyNum((divNum(current, total)), 100)
    }

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProgress)
    })
      .then(r => r.json())
      .then(updateProgress)
  }, [current])

  function handleSubmitGoal(e) {
    e.preventDefault();

    // Makes a new transaction for main acct
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
    // end

    // Updates the account balance - removes money from main account
    const newAccountBalance = {
      ...account,
      balance: subNumbers(account.balance, inputGoal)
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
    // end

    // creates a new curent key within object for goal
    const newCurrentAmount = {
      current: addNumbers(goal.current, inputGoal)
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

  // TODO explore calls to get pretty number helper to utiliy file
  return (
    <div className='card'>
      <div className='name'>
        <h3>{name.toUpperCase()}</h3>
      </div>
      <div className='total'>
        <div>Total: ${bigDecimal.getPrettyValue(total)}</div>
      </div>
      <div className='current'>
        <div>Current: ${bigDecimal.getPrettyValue(current)}</div>
      </div>
      <div className='progress'>
        <div>Progress: {progress}%</div>
      </div>
      <ProgressBar 
        bgcolor={"#05445E"} 
        completed={progress}
      />
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