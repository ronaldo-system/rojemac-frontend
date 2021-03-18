import React, { useEffect, useState } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import api from '../services/api'
import InputMask from 'react-input-mask'

const EditEmpresa = props => {
    const { id } = useParams()
    const history = useHistory();
    const [cnpj, setCnpj] = useState('')
    const [razao, setRazao] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [uf, setUf] = useState('')

    function getEmpresa(id){
        api.post('/empresa-find-by-id', {id})
            .then(res => {
               setFormulario(res.data.data)   
            })
            .catch(err => console.error(err))
    }

    function setFormulario(data){
        setCnpj(data.cnpj)
        setRazao(data.razao)
        setTelefone(data.telefone)
        setEmail(data.email)
        setCep(data.cep)
        setLogradouro(data.logradouro)
        setNumero(data.numero)
        setComplemento(data.complemento)
        setMunicipio(data.municipio)
        setUf(data.uf)
    }

    function handleSubmit(event){
        event.preventDefault()
        api.post('/empresa-update', {
            id,
            cnpj,
            razao,
            telefone,
            email,
            cep,
            logradouro,
            numero,
            complemento,
            municipio,
            uf
        })
            .then(res => {
               console.log(res.status)
               history.push("/list");
            })
            .catch(err => console.error(err))
    }
    
    useEffect(() => {
        getEmpresa(id)
      }, []);
    
    return(
        <div className="form-empresa">
            <h1>Edição de Empresa</h1>
            <form onSubmit={handleSubmit} >
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
                    value={razao}
                    onChange={e => setRazao(e.target.value)}
                    />    
            
                <input
                    type="text" 
                    placeholder="Telefone"
                    component="input"
                    name="telefone" 
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    />
            
                <input
                    type="text" 
                    placeholder="Email"
                    component="input"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    />
                
                <input
                    type="text" 
                    placeholder="CEP"
                    component="input"
                    name="cep" 
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    mask="99999-999"
                    />
                
                <input
                    type="text"
                    placeholder="Logradouro" 
                    component="input"
                    name="logradouro" 
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                    />
                
                <input
                    type="text" 
                    placeholder="Número"
                    component="input"
                    name="numero" 
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                    />

                <input
                    type="text" 
                    placeholder="Complemento"
                    component="input"
                    name="complemento" 
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}/>

                <input
                    type="text" 
                    placeholder="Município"
                    component="input"
                    name="municipio"
                    value={municipio}
                    onChange={e => setMunicipio(e.target.value)} 
                    />

                <input
                    type="text" 
                    placeholder="UF"
                    component="input"
                    name="uf" 
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />
                
                <button 
                    className="btn btn-primary min-width"
                    type="submit"
                    >Salvar
                </button>
            </form>
        </div>
    )
}

export default EditEmpresa