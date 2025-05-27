import React from 'react'
import Cita from './Cita'
import "/src/components/Listado.css"

export default function Listado({setListado, listaCitas}) {
    return (
    <section>
        <h2>administra tus citas</h2>
        {
            listaCitas.map((citaa,index)=>((
                <Cita index={index} key={index} cita={citaa} setListado={setListado} lista={listaCitas}/>
            )))
        }
    </section>
  )
}
