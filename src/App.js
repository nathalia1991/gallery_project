import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import P1 from './components/P1';
import P2 from './components/P2';
import P3 from './components/P3';
import P4 from './components/P4';
import P5 from './components/P5';
import P6 from './components/P6';
import P7 from './components/P7';
import P8 from './components/P8';
import P9 from './components/P9';
import P10 from './components/P10';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
    <div className='container'>
      <h1 id='title' className='text-center my-3'>Galeria</h1>
    </div>
      <Routes>
        <Route path='/p1' element={<P1 className="image-size"/>}/>
        <Route path='/p2' element={<P2 className="image-size"/>}/>
        <Route path='/p3' element={<P3 className="image-size"/>}/>
        <Route path='/p4' element={<P4 className="image-size"/>}/>
        <Route path='/p5' element={<P5 className="image-size"/>}/>
        <Route path='/p6' element={<P6 className="image-size"/>}/>
        <Route path='/p7' element={<P7 className="image-size"/>}/>
        <Route path='/p8' element={<P8 className="image-size"/>}/>
        <Route path='/p9' element={<P9 className="image-size"/>}/>
        <Route path='/p10' element={<P10 className="image-size"/>}/>
      </Routes>
      <Navigation/>
    </Router>
  );
}

export default App;
