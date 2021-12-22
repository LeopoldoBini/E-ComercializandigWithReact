import { createContext } from "react";
import { useState } from "react"

export const contextoCarro = createContext()

const { Provider, Consumer } = contextoCarro



const CartContext = ({ children }) => {


    const [carrito, setCarrito] = useState([])

    const estaEnCarro = (itemId) => {

        const idProductosEnCarro = carrito.reduce((a, b) => [...a, b.id], [])

        return idProductosEnCarro.includes(itemId)
    }

    const agregarAlCarro = (itemId, itemCantidad) => {


        if (estaEnCarro(itemId)) {
            const copiaCarrito = [...carrito]
            copiaCarrito.find(producto => producto.id = itemId).cantidad += itemCantidad
            setCarrito(copiaCarrito)


        } else {
            const itmAlCarro = { id: itemId, cantidad: itemCantidad }
            setCarrito([...carrito, itmAlCarro])

        }
    }

    const borrarDelCarro = (itemId, itemCantidad) => {

        const copiaCarrito = [...carrito]
        copiaCarrito.find(producto => producto.id = itemId).cantidad -= itemCantidad
        setCarrito(copiaCarrito)

    }

    const limpiarCarro = () => {

        setCarrito([])
    }


    const contextoCarritoValue = { carrito, agregarAlCarro, estaEnCarro, borrarDelCarro, limpiarCarro }
    




    return (

        <Provider value={contextoCarritoValue} >
            {children}
        </Provider>

    )
}

export default CartContext