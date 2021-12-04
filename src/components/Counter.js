import { useState } from "react"


const Counter = ({ stock, initial }) => {


    const [contador, setContador] = useState(initial)

    console.log(contador)


    const addOn = () => {
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
                <button onClick={restar}>➖</button>
                <button onClick={addOn}>Agregar al carretex</button>
                <button onClick={sumar}>➕</button>
            </div>
        </>
    }else{
        return <h1>No Tenemos Stock, perdon</h1>
    }
}

export default Counter;