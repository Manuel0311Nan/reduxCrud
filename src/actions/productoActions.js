import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
//Crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);

            //si sale bien, actualizar el state
            dispatch(agregarProductoExito(producto))
            Swal.fire(
                'Perfecto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            dispatch(agregarProductoError(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Ocurrió un error'
            }
            )
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//si el producto se guarda en base de datos

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//si hubo error
const agregarProductoError = estado=> ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})