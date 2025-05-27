import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "/src/components/Formulario.css"

export default function Formulario({setListado, listado}) {
    const [cita, setCita]=useState({});
    const [idAutNum, setIdAutoNum]=useState(0);

    const agregarCita=(e)=>{
        e.preventDefault();
        if(cita.dueno!=null && cita.nombre!=null && cita.fecha!=null && cita.hora!=null && cita.sintomas!=null){
        const citaa={
            id: cita.idAutNum,
            nombre: cita.nombre,
            dueno: cita.dueno,
            fecha: cita.fecha,
            hora: cita.hora,
            sintomas: cita.sintomas
        }
        setIdAutoNum(idAutNum+1);
        let aux=[...listado]
        aux.push(citaa)
        setListado(aux);
        setCita({
            nombre: "",
            dueno: "",
            fecha: "",
            hora: "",
            sintomas: ""
        });

    }else {
        Swal.fire({
            title: "ERROR! Hay campos vacíos.",
            icon: "error",
            draggable: true
          });
    }
    }
 
    return (
    <form>
        <h2>crear mi cita</h2>
        <div>
                <label>Nombre mascota</label>
                <input
                    type="text"
                    value={cita.nombre}
                    placeholder='Nombre mascota'
                    onChange={(e) => setCita({ ...cita, nombre: e.target.value })}
                />
            </div>
            <div>
                <label>Nombre dueño</label>
                <input
                    type="text"
                    value={cita.dueno}
                    placeholder='Nombre dueño'
                    onChange={(e) => setCita({ ...cita, dueno: e.target.value })}
                />
            </div>
            <div>
                <label>Fecha</label>
                <input
                    type="date"
                    value={cita.fecha}
                    onChange={(e) => setCita({ ...cita, fecha: e.target.value })}
                />
            </div>
            <div>
                <label>Hora</label>
                <input
                    type="time"
                    value={cita.hora}
                    onChange={(e) => setCita({ ...cita, hora: e.target.value })}
                />
            </div>
            <div>
                <label>Síntomas</label>
                <textarea
                    value={cita.sintomas}
                    onChange={(e) => setCita({ ...cita, sintomas: e.target.value })}
                />
            </div>
            <button onClick={agregarCita}>Agregar cita</button>
    </form>
  )
}
