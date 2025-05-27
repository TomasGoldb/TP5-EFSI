import React from 'react'
import "./Cita.css"

export default function Cita({index, cita, setListado, lista}) {
    const eliminarCita =()=>{
        let aux=[...lista]
        aux.splice(index,1);
        setListado(aux);
        localStorage.setItem('tareas', JSON.stringify(aux));
    }

    return (
    <div className="cita">
            <p><b>Mascota:</b>{cita.nombre}</p>
            <p><b>Dueño:</b>{cita.dueno}</p>
            <p><b>Fecha:</b>{cita.fecha }</p>
            <p><b>Hora:</b>{cita.hora}</p>
            <p><b>Síntomas:</b>{cita.sintomas}</p>
        <button onClick={eliminarCita}>Eliminar x</button>
    </div>
  )
}
