import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Studiamo from './pages/Studiamo';
import Chiedi from './pages/Chiedi';
import Vocabolario from './pages/Vocabolario';
import Testo from './pages/Testo';
import Mappe from './pages/Mappe';
import Specchio from './pages/Specchio';
import Accessibilita from './pages/Accessibilita';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studiamo" element={<Studiamo />} />
        <Route path="/chiedi" element={<Chiedi />} />
        <Route path="/vocabolario" element={<Vocabolario />} />
        <Route path="/testo" element={<Testo />} />
        <Route path="/mappe" element={<Mappe />} />
        <Route path="/specchio" element={<Specchio />} />
        <Route path="/accessibilita" element={<Accessibilita />} />
      </Routes>
    </Router>
  );
};

export default App;