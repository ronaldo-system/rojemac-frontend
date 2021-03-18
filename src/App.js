import logo from './logo.svg';
import logoRojemac from './rojemac.png';
import './App.css';
import {Link, Route} from 'react-router-dom'
import routesConfig from './routesConfig'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="link-home">
          <Link to="/">Home</Link>
          <Link to="/list">Lista Empresa</Link>
          <Link to="/create">Nova Empresa</Link>
        </div>
        <img src={logoRojemac} className="App-logo-rojemarc" alt="logo" />
        {routesConfig.map((value, key)=>{
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          ></Route>
        })}

      </header>
    </div>
  );
}

export default App;
