import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./HomePage/Home";
import Navbar from "./Components/Navbar";
import { DetailEvent } from "./page/EventDetail";
// import CreateEvent from './page/Buat Event';
import CreateEvent2 from "./Components/formEvent";
import { Discovery } from "./Discover";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/create" element={<CreateEvent2 />} />
        <Route path="/discovery" element={<Discovery />} />
      </Routes>
    </div>
  );
}

export default App;
