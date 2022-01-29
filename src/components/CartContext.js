import { createContext } from "react";
import { useState } from "react";

export const GlobalCartContext = createContext();

const { Provider } = GlobalCartContext;

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalQuantity , setTotalQuantity] = useState(0)
    const [totalAmount , setTotalAmount] = useState(0)
    

    const estaEnCarro = (itemId) => {
        const idProductosEnCarro = carrito.reduce((a, b) => [...a, b.id], []);

        return idProductosEnCarro.includes(itemId);
    };

    const agregarAlCarro = (itemId, itemCantidad, fullItem) => {

        if (estaEnCarro(itemId)) {

            const copiaCarrito = [...carrito];
            copiaCarrito.find((producto) => (producto.id === itemId)).cantidad += itemCantidad;
            setCarrito(copiaCarrito)

            
        } else {

            const itmAlCarro = {
                id: itemId,
                cantidad: itemCantidad,
                detalle: fullItem,
            };
            setCarrito([...carrito, itmAlCarro]);

        }
        setTotalAmount(totalAmount + (itemCantidad * fullItem.price))
        setTotalQuantity(totalQuantity + itemCantidad)

    };


    const borrarDelCarro = (itemId, cantidad, precio) => {
        const copiaCarritoFiltrada = [...carrito].filter((producto) => (producto.id !== itemId));
        const monto = cantidad * precio
        setCarrito(copiaCarritoFiltrada)
        setTotalQuantity(totalQuantity - cantidad)
        setTotalAmount(totalAmount - monto)

    }

    const limpiarCarro = () => {
        setCarrito([])
        setTotalAmount(0);
        setTotalQuantity(0)
    };

    const cartContextValue = {
        carrito,
        totalQuantity,
        totalAmount,
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
