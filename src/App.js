import React from "react";
import "./App.css";
import Header from "./components/Header";
// import routes from "./config/routes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {Productos} from '../src/pages/Productos'
import { NuevoProducto } from '../src/pages/NuevoProducto'
import { EditarProducto } from '../src/pages/EditarProducto'
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <div className="container">
          <Switch>
          <Route exact path="/" component={Productos} />
                  <Route exact path="/productos/nuevo" component={NuevoProducto} />
                  <Route exact path="/productos/editar/:id" component={EditarProducto} />
        {/* {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))} */}
          </Switch>
        </div>
        </Provider>
    </Router>
  )
}

export default App;
