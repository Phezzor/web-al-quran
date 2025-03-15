import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Quran from './components/Quran.jsx'
import Home from './components/Home.jsx'
import Doa from './components/Doa.jsx';
import Tafsir from './components/Tafsir.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/doa" element={<Doa />} />
        <Route path="/tafsir" element={<Tafsir/>} />
      </Routes>
    </Router>
  </StrictMode>
)
