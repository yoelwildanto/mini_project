import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./HomePage/Home";
import Navbar from "./Components/Navbar";
import { DetailEvent } from "./page/EventDetail";
import CreateEvent2 from "./Components/formEvent";
import { Discovery } from "./Discover";
import './App.css';
import Ordersummary from './pages/ordersummary';
import Transaction2 from './pages/transaction';
import AfterPayment from './pages/afterpayment';
import UploadImage from './pages/upload';
import LoginPage from "./page/Auth/Login";
import RegisterPage from "./page/Auth/Register";
import Transaction from "./page/Transactions/TransactionDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order-summary" element={<Ordersummary/>} /> 
        <Route path="/e-ticket" element={<AfterPayment/>} />
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/create" element={<CreateEvent2 />} />
        {/* <Route path="/transaction" element={<Transaction/>} /> */}
        <Route path="/upload" element={<UploadImage/>} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/event/:state" element={<DetailEvent />} />
        <Route path="/transaction/:state" element={<Transaction />} /> */}
      </Routes>
    </div>  
  );
}

export default App;
