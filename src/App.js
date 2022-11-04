import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home'
import Datos from './pages/Datos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='datos' element={<Datos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
