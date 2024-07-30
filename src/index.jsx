import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/inicio/App';
import Sobre from './pages/sobre/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);