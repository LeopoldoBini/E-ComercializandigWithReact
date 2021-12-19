import { useState } from "react"


const Counter = ({ stock , agregarAlCarro , idProdAAgregar}) => {


    const [contador, setContador] = useState(1)


    const onAdd = () => {
        agregarAlCarro(idProdAAgregar , contador)
        console.log(`agregando ${contador} al carrito`)
        setContador(0)
    }

    const sumar = () => {
        if (contador < stock) setContador(contador + 1)
    }
    const restar = () => {
        if (contador >= 2) setContador(contador - 1)
    }


    //console.log(contador)
    if (stock > 0) {
        return <>
            <p>Unidades a comprar: {contador}</p>
            <div id="botonera">
                <button class="btn-floating btn-small waves-effect waves-light red" onClick={restar}>➖</button>
                <button class="waves-effect waves-light btn-small pink lighten-2 pulse" onClick={onAdd}>Agregar al Carrito</button>
                <button class="btn-floating btn-small waves-effect waves-light red" onClick={sumar}>➕</button>
            </div>
        </>
    }else{
        return <h1>No Tenemos Stock, perdon</h1>
    }
}

export default Counter;