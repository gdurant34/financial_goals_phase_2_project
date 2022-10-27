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
  const [inputTransaction, setInputTransaction] = useState('');
  const [goals, setGoals] = useState([]);
  const [selected, setSelected] = useState("Select");


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

  function onChangeSelect(e) {
    setSelected(e.target.value)
  }

  function handleSubmitTransaction(e) {
    e.preventDefault();
    const newTransaction = {
      id: "",
      category: selected,
      date: currentDate(), 
      amount: inputTransaction
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
    
    setInputTransaction('');
    setSelected("Select")
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
            handleSubmit={handleSubmitTransaction} 
            input={inputTransaction}
            setInput={setInputTransaction}
            selected={selected}
            setSelected={setSelected}
            onChange={onChangeSelect}
          />} 
        />
        <Route path="/goals" element={
          <ActiveGoals 
            goals={goals}
            transactions={transactions}
            setTransactions={setTransactions}
            currentDate={currentDate}
          />} 
        />
        <Route path="/completed-goals" element={<CompletedGoals />} />
      </Routes>
    </div>
  );
}

export default App;
