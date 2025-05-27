import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import CrearCita from './pages/CrearCita';
import Home from './pages/Home';
import VerCitas from './pages/VerCitas';
import Header from './components/Header';

function App() {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setListado(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    if (listado.length > 0) {
      localStorage.setItem('tareas', JSON.stringify(listado));
    }
  }, [listado]);

  return (
    <>
    
    <Header />
      <Routes >
        <Route path="/" element={<Home listado={listado} setListado={setListado} />} />
        <Route path="/Home" element={<Home listado={listado} setListado={setListado} />} />
        <Route path="/VerCitas" element={<VerCitas listado={listado} setListado={setListado} />} />
        <Route path="/CrearCita" element={<CrearCita setListado={setListado} listado={listado} />} />
      </Routes>
    </>
  );
}

export default App;

/*<div className='appp'>
      <h1>Administrador de pacientes</h1>
      <div className="contenedor-form-list">
        
        
      </div>
    </div>
  );*/