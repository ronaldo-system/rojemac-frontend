import logo from '../logo.svg';
import React from 'react'
import {Link} from 'react-router-dom'

const Home = props =>{
    return (
    <div className="App">
      <header className="App-header">
        <div className="link-home">
          <Link to="/">Home</Link>
          <Link to="/list">Lista Empresa</Link>
          <Link to="/create">Nova Empresa</Link>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    )
}

export default Home