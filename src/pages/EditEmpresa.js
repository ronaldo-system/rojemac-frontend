import React from 'react'
import { useParams } from 'react-router-dom'

const EditEmpresa = props => {
    const { id } = useParams()
    return(
        <>
            <h1>Edição de Empresa</h1>
            <h3>{id}</h3>
        </>
    )
}

export default EditEmpresa