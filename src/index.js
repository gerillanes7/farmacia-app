import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './componentes/login/login'
import Home from './componentes/Home/home'
import Medicamentos from './componentes/Medicamentos/medicamentos'
import Afiliados from './componentes/Afiliados/afiliados'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact path="/">
          <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/medicamentos">
            <Medicamentos/>
          </Route>
          <Route path="/afiliados">
            <Afiliados/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
