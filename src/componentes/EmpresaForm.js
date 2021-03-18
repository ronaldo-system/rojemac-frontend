import React, { useState } from 'react'
import {submitEmpresaAction} from '../actions/empresa/EmpresaAction'
import api, { receita } from '../services/api'
import InputMask from 'react-input-mask'

const EmpresaForm = (props) => {
    const [cnpj, setCnpj] = useState('')
    const [razao, setRazao] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        // TODO axios
        api.post('/rota', {
            cnpj,
            razao,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return (
        <div className="form-empresa">
            <form onSubmit={handleSubmit}>
                <InputMask 
                    type="text" 
                    placeholder="CNPJ"
                    name="cnpj" 
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                    mask="99.999.999/9999-99"
                />
                <input
                    type="text" 
                    placeholder="Razao"
                    component="input"
                    name="razao" 
                    // value={this.state.razao}
                    // onChange={this.changeInput}
                    />
                
            
                <input
                    type="text" 
                    placeholder="Telefone"
                    component="input"
                    name="telefone" 
                    />
                

                <input
                    type="text" 
                    placeholder="Email"
                    component="input"
                    name="email" />
                

                <input
                    type="text" 
                    placeholder="CEP"
                    component="input"
                    name="cep" />
                
                
                <input
                    type="text"
                    placeholder="Logradouro" 
                    component="input"
                    name="logradouro" />
                
            
                <input
                    type="text" 
                    placeholder="Número"
                    component="input"
                    name="numero" />
                

                <input
                    type="text" 
                    placeholder="Complemento"
                    component="input"
                    name="complemento" />
                

                <input
                    type="text" 
                    placeholder="Município"
                    component="input"
                    name="municipio" />
                

                <input
                    type="text" 
                    placeholder="UF"
                    component="input"
                    name="uf" />
                
                
                <button 
                    type="submit"
                    >Salvar
                </button>
            </form>
        </div>
    )
}


// const mapStateToProps = state => ({})

export default EmpresaForm