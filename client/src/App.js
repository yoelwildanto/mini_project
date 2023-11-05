import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./HomePage/Home";
import Navbar from "./Components/Navbar";
import Discover from "./Discover/Discover";
import CreateEvent from "./page/Buat Event";
import LoginPage from "./page/Auth/Login";
import RegisterPage from "./page/Auth/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discovery" element={<Discover />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
