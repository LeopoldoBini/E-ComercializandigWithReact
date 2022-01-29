import { Link } from "react-router-dom";
import { GlobalCartContext } from "./CartContext.js";
import { useContext } from "react";
import CartElement from "./CartElement.js";


const CartContainer = () => {


    const { carrito, borrarDelCarro , totalAmount, totalQuantity } = useContext(GlobalCartContext);
    const carroVacio = carrito.length === 0;


    if (!carroVacio) {
        return (
            <div className="container">
                <h2 id="carro">Carrito de Compras</h2>
                <h3 id="carroCounttitulo">
                    {carrito.length} Productos | {totalQuantity} Unidades en Total{" "}
                </h3>
                <div className="container small">
                    <ul className="collection">
                        
                        {carrito.map((e, i) => {
                            return (
                                <CartElement key={i} itm={e} borrarDelCarro={borrarDelCarro} />
                            );
                        })}
                        <div id="totalAPagar">
                            <li className="collection-item avatar large">
                                <i className="material-icons circle red">monetization_on</i>
                                <span className="title">TOTAL A PAGAR </span>
                                <p>$ {Math.round((totalAmount + Number.EPSILON) * 100) / 100 }</p>
                            </li>
                            <Link to="/finalizandoCompra">
                                <button className="btn">PAGAR</button>
                            </Link>

                        </div>
                    </ul>

                    <Link to="/">
                        <button id="seguirComprando">👈 Seguir comprando</button>
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

export default CartContainer;
