import React from 'react'
import Listado from '../components/Listado'

export default function VerCitas({setListado, listado}) {
  return (
    <div className='centrado'>
    <Listado setListado={setListado} listaCitas={listado} />
    </div>
  )
}
