import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "./HomePage/Home"
import Navbar from './Components/Navbar';
import Discover from './Discover/Discover';
import CreateEvent from './page/Buat Event';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/a' element={<LandingPage/>}/>
      <Route path='/discovery' element={<Discover/>}/>
      <Route path='/' element={<CreateEvent/>}/>
      </Routes>
    </div>
  );
}

export default App;
