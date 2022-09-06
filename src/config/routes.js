import React from 'react'
import Productos from '../pages/Productos'
import { NuevoProducto } from '../pages/nuevoProducto'
import { EditarProducto } from '../pages/EditarProducto'
const routes = [
    {
        path: "/",
        element: <Productos />,
        isPrivate:false
    },
    {
        path: "/productos/nuevo",
        element: <NuevoProducto />,
        isPrivate:false
    },
    {
        path: "/productos/editar/:id",
        element: <EditarProducto/>,
        isPrivate:false
    },
]

export default routes