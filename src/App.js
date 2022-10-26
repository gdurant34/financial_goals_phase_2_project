import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AccountSummary from './pages/AccountSummary/AccountSummary';
import Goals from './pages/Goals/Goals';
import CompletedGoals from './pages/CompletedGoals/CompletedGoals';
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-summary" element={<AccountSummary />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/completed-goals" element={<CompletedGoals />} />
      </Routes>
    </div>
  );
}

export default App;
