import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Bienvenido</h1>
      <h2>Administrador de Citas</h2>

      <div className="botones-home">
        <button onClick={() => navigate('/CrearCita')}>Crear una cita</button>
        <button onClick={() => navigate('/VerCitas')}>Ver citas</button>
      </div>
    </div>
  );
}