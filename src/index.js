import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import Pagina404 from './pages/Pagina404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/cadastro/video" element={<CadastroVideo/>} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria/>} />
      <Route path="*" element={<Pagina404/>} />
    </Routes>
  </BrowserRouter>
);
