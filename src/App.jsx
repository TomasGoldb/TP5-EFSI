import { useState, useEffect } from 'react';
import './App.css';
import Listado from './components/Listado';
import Formulario from './components/formulario';

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
    <div className='appp'>
      <h1>Administrador de pacientes</h1>
      <div className="contenedor-form-list">
        <Formulario setListado={setListado} listado={listado} />
        <Listado setListado={setListado} listaCitas={listado} />
      </div>
    </div>
  );
}

export default App;
