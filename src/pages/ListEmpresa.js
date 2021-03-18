import React, { useState, useEffect } from 'react'
import api from '../services/api'
import {Link} from 'react-router-dom'

const ListEmpresa = () => {
  const [empresas, setEmpresas] = useState([])

  function getEmpresas() {
    // swal.fire(carregando)
    api.post('/empresa-list')
      .then(res => {
        //swal.fire(sucesso)
        setEmpresas(res.data.data)
      })
      .catch(err => console.error(err))
  }

  function deleteEmpresa(id) {
    api.post('/empresa-delete', { id })
      .then(res => {
        setEmpresas(empresas.filter(empresa => empresa.id !== id))
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getEmpresas()
  }, [])

  return (
    <div>
      <h3>Lista de Empresas</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {empresas.map((empresa, key) => {
            return (
              <tr key={key}>
                <td>{empresa.id}</td>
                <td>{empresa.cnpj}</td>
                <td>{empresa.razao}</td>
                <td>{empresa.logradouro}</td>
                <td>{empresa.numero}</td>
                <td>
                  <button onClick={() => deleteEmpresa(empresa.id)}>Deletar</button>
                  <Link to={`/edit/${empresa.id}`}>Editar</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmpresa