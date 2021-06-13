import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import "./assets/CSS/Login.css";
import App from './pages/App';
import Cadastro from './pages/Cadastro'
import Listagem from './pages/Listagem';
import Descricao from './pages/Descricao';
import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/listagem" component={Listagem}/>
          <Route path="/descricao" component={Descricao}/>
        </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
