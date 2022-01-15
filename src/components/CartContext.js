import { createContext } from "react";
import { useState } from "react";

export const GlobalCartContext = createContext();

const { Provider } = GlobalCartContext;

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    

    const estaEnCarro = (itemId) => {
        const idProductosEnCarro = carrito.reduce((a, b) => [...a, b.id], []);

        return idProductosEnCarro.includes(itemId);
    };

    const agregarAlCarro = (itemId, itemCantidad, fullItem) => {
        if (estaEnCarro(itemId)) {

            const copiaCarrito = [...carrito];
            copiaCarrito.find((producto) => (producto.id === itemId)).cantidad += itemCantidad;
            setCarrito(copiaCarrito);
            
        } else {

            const itmAlCarro = {
                id: itemId,
                cantidad: itemCantidad,
                detalle: fullItem,
            };
            setCarrito([...carrito, itmAlCarro]);
        }
    };


    const borrarDelCarro = (itemId) => {
        const copiaCarritoFiltrada = [...carrito].filter((producto) => (producto.id != itemId));
        setCarrito(copiaCarritoFiltrada)
    }

    const limpiarCarro = () => {
        setCarrito([]);
    };

    const cartContextValue = {
        carrito,
        agregarAlCarro,
        estaEnCarro,
        borrarDelCarro,
        limpiarCarro,
    };

    return <Provider value={cartContextValue}>
        {children}
        </Provider>;
};

export default CartContext;
