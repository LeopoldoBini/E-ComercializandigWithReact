import { useState } from "react"
import Counter from "./Counter.js"
import { Link } from "react-router-dom"
const ItemDetail = ({ itm }) => {

    const { id, title, price, category, description, image, rating } = itm
    const stock = 5
    const rate = 4.5
    const votantes = 200
    const [carrito, setCarrito] = useState([])

    const agregarAlCarro = (itemId, itemCantidad) => {

        const productosYaSeleccionados = carrito.reduce((a, b) => [...a, b.id], [])


        if (productosYaSeleccionados.includes(itemId)) {
            const copiaCarrito = [...carrito]
            copiaCarrito.find(producto => producto.id = itemId).cantidad = itemCantidad + copiaCarrito.find(producto => producto.id = itemId).cantidad
            setCarrito(copiaCarrito)
            

        } else {
            const itmAlCarro = { id: itemId, cantidad: itemCantidad }
            setCarrito([...carrito, itmAlCarro])
            
        }

    }
    

    return (
        <div class="container-large">

            <div class="row">
                <div class="col s12"><h1>{category} </h1></div>
            </div>

            <div class="row">
                <div class="col s6 img">
                    <img class="col s12" src={image} alt={title} />
                </div>


                <div class="col s6">

                    <h3>{title}</h3>
                    <div class="divider"></div>
                    <div class="section flex">
                        <meter class="col s4 right-align" max="5" min="0" value={rate}></meter>
                        <h5>{rate} <p>`({votantes}) votos`</p></h5>
                    </div>

                    <div class="divider col s12"></div>
                    <h4>Por tan solo: $ {price}</h4>
                    <p >Stock Disponible : {stock}</p>

                    <Counter stock={stock} agregarAlCarro = {agregarAlCarro} idProdAAgregar= {id}/>
                    <h5>{description}</h5>

                    <Link to="/cart" > <button>Ir al carrito</button> </Link>


                </div>
            </div>
        </div>
    )
}

export default ItemDetail
