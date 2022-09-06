import React from 'react'

export const EditarProducto = () => {
  return (
    <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card my-4">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            Editar Producto
          </h2>
          <form>
            <div className="form-group">
              <label>Nombre Producto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Producto"
                name="nombre"
                // value={nombre}
                // onChange={e => guardarNombre(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Precio Producto</label>
              <input
                type="number"
                className="form-control"
                placeholder="Precio Producto"
                name="precio"
                // value={precio}
                // onChange={e =>  guardarPrecio( Number(e.target.value) )}
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

