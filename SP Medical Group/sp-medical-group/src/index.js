import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import "./assets/CSS/Login.css";
import App from './pages/App';
import Cadastro from './pages/Cadastro'
import Listagem from './pages/Listagem';
import Descricao from './pages/Descricao';
import reportWebVitals from './reportWebVitals';
import { parseJwt, usuarioAutenticado } from './services/auth';

const PermissaoAdm = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Administrador
      usuarioAutenticado() && parseJwt().role === "1" ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = '/' />
    }
  />
);

const PermissaoMed = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Médico
      usuarioAutenticado() && parseJwt().role === "3" ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = '/' />
    }
  />
);

const PermissaoUsu = ({ component : Component  }) => (
  <Route 
    render = { props =>
      // Verifica se o usuário está logado e se é Médico ou Paciente ou Administrador
      usuarioAutenticado() && (parseJwt().role === "3" || parseJwt().role === "2" || parseJwt().role === "1") ? 
      // Se sim, renderiza de acordo com a rota solicitada e permitida
      <Component {...props} /> : 
      // Se não, redireciona para a página de login
      <Redirect to = '/' />
    }
  />
);

const routing = (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <PermissaoAdm path="/cadastro" component={Cadastro}/>
          <PermissaoUsu path="/listagem" component={Listagem}/>
          <PermissaoMed path="/descricao" component={Descricao}/>
        </Switch>
    </div>
  </Router>
);

ReactDOM.render( routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
