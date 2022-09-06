import React, { useState } from "react";

import {
  useDispatch,
  // useSelector
} from "react-redux";

import { crearNuevoProductoAction } from '../actions/productoActions';




export const NuevoProducto = () => {

  //state del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState('')

  //utilizar useDispatch y te crea una función
  const dispatch = useDispatch();

  //llamar el action de productAction
  const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto))
  

  const submitNuevoProducto = e => {
    e.preventDefault();
  
  //Validar Form
    if (nombre.trim === '' || precio<= 0) {
      return;
    }
    //si no hay errores

    // crear el nuevo producto
    agregarProducto({
      nombre,
      precio
    });
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card my-4">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar producto
            </h2>
            <form onSubmit={submitNuevoProducto}>
              
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={e =>  guardarPrecio( Number(e.target.value) )}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};