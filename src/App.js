import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "./HomePage/Home"
import Navbar from './Components/Navbar';
import Discover from './Discover/Discover';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/discovery' element={<Discover/>}/>
      </Routes>
    </div>
  );
}

export default App;
