import React from 'react'
import Formulario from '../components/Formulario'

export default function CrearCita({setListado, listado}) {
  return (
    <div className='centrado'>
    <Formulario setListado={setListado} listado={listado} />
    </div>
  )
}
