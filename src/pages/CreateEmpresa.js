import React, {Component} from 'react'
import EmpresaForm from '../componentes/EmpresaForm'

class CreateEmpresa extends Component {
    render(){
        return(
            <div>
                <h3>Nova Empresa</h3> 
                <EmpresaForm />
            </div>
        )
    }
}

export default CreateEmpresa