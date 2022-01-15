import { Link } from "react-router-dom";
import { GlobalCartContext } from "./CartContext.js";
import { useContext } from "react";
import CartElement from "./CartElement.js";


const Cart = () => {


    const { carrito, borrarDelCarro } = useContext(GlobalCartContext);
    const carroVacio = carrito.length == 0;

    const totalAmount = carroVacio
        ? 0
        : carrito.map((e) => e.cantidad * e.detalle.price).reduce((a, b) => a + b);
    const totalQuantity = carroVacio
        ? 0
        : carrito.map((e) => e.cantidad).reduce((a, b) => a + b);


    if (!carroVacio) {
        return (
            <div className="container">
                <h2>Carrito de Compras</h2>
                <h3>
                    {carrito.length} Productos | {totalQuantity} Unidades en Total{" "}
                </h3>
                <div className="container small">
                    <ul class="collection">
                        
                        {carrito.map((e, i) => {
                            return (
                                <CartElement key={i} itm={e} borrarDelCarro={borrarDelCarro} />
                            );
                        })}
                        <div id="totalAPagar">
                            <li class="collection-item avatar large">
                                <i class="material-icons circle red">monetization_on</i>
                                <span class="title">TOTAL A PAGAR </span>
                                <p>$ {totalAmount}</p>
                            </li>
                            <Link to="/finalizandoCompra">
                                <button className="btn">PAGAR</button>
                            </Link>

                        </div>
                    </ul>

                    <Link to="/">
                        <button>Seguir comprando</button>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <h1>No hay nada en el Carrito</h1>
                <Link to="/">
                    <button>Ir a Comprar!!</button>
                </Link>
            </>
        );
    }
};

export default Cart;
