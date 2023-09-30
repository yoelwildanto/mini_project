import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './HomePage/Home';
import { About } from './About/About';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
