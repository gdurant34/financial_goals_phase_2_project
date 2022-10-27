import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AccountSummary from './pages/AccountSummary/AccountSummary';
import ActiveGoals from './pages/ActiveGoals/ActiveGoals';
import CompletedGoals from './pages/CompletedGoals/CompletedGoals';
import Form from "./components/Form/Form";

function App() {  
  const [account, setAccount] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [input, setInput] = useState('');
  const [goals, setGoals] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/account")
        .then(r => r.json())
        .then(setAccount);

    fetch(" http://localhost:3000/transactions")
        .then(r => r.json())
        .then(setTransactions)

    fetch("http://localhost:3000/goals")
      .then(r => r.json())
      .then(setGoals)
  }, [])

  function currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
        id: "",
        category: e.target,
        date: currentDate(), 
        amount: input
    }

    fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
            "content-Type" : "application/json"
        },
        body: JSON.stringify(newTransaction)
    })
        .then(r => r.json())
        .then(setTransactions)
}


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/account-summary" element={
          <AccountSummary 
            transactions={transactions}
            account={account}
          />} 
        />
        <Route path="/goals" element={
          <ActiveGoals 
            handleSubmit={handleSubmit} 
            setTransactions={setTransactions}
            input={input}
            setInput={setInput}
            goals={goals}
          />} 
        />
        <Route path="/completed-goals" element={<CompletedGoals />} />
      </Routes>
    </div>
  );
}

export default App;
