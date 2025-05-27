import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="header-nav">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => navigate('/Home')}>Home</li>
        <li className="nav-item" onClick={() => navigate('/CrearCita')}>Crea una cita</li>
        <li className="nav-item" onClick={() => navigate('/VerCitas')}>Ve las citas</li>
      </ul>
    </nav>
  );
}
