import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from "./HomePage/Home"
import Navbar from './Components/Navbar';
import Discover from './Discover/Discover';
import CreateEvent from './page/Buat Event';
import FormEvent from './Components/formEvent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/discovery' element={<Discover/>}/>
      <Route path='/create' element={<CreateEvent/>}/>
      <Route path='1' element={<FormEvent/>}/>
      </Routes>
    </div>
  );
}

export default App;
