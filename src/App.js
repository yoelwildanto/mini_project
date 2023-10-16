import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "./HomePage/Home"
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
