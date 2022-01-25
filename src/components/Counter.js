import { useState } from "react";
import { toast } from "react-toastify";

const Counter = ({ stock, agregarAlCarro, itmToCart }) => {


    const [quantity, setQuatity] = useState(1)


    const onAdd = () => {
        agregarAlCarro(itmToCart.id, quantity, itmToCart)
        console.log(`agregando ${quantity} al carrito`)
        toast.success('🐱‍🏍Agregado al carrito! ✔')

        setQuatity(1)
    }

    const sumar = () => {
        if (quantity < stock) setQuatity(quantity + 1)
    }
    const restar = () => {
        if (quantity >= 2) setQuatity(quantity - 1)
    }


    if (stock > 0) {
        return <>
            <p>Unidades a comprar: {quantity}</p>
            <div id="botonera">
                <button className="btn-floating btn-small waves-effect waves-light red" onClick={restar}>➖</button>
                <button className="waves-effect waves-light btn-small pink lighten-2" onClick={onAdd}>Agregar al Carrito</button>
                <button className="btn-floating btn-small waves-effect waves-light red" onClick={sumar}>➕</button>
            </div>

        </>
    } else {
        return <h1>No Tenemos Stock, perdon</h1>
    }
}

export default Counter;