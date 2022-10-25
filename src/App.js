import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AccountSummary from './pages/AccountSummary/AccountSummary';
import Goals from './pages/Goals/Goals';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-summary" element={<AccountSummary />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}

export default App;
