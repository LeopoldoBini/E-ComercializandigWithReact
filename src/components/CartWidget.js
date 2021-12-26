import { Link } from "react-router-dom";
import {GlobalCartContext} from "./CartContext.js";
import { useContext } from "react";

const CartWidget = () => {
    
    const {carrito } = useContext(GlobalCartContext)
    
    if (carrito.length != 0){

        return (
            <>
                <div class="right" style={{ width: "100px" }}>
                    <Link to="/cart">
                    <span class="new badge" data-badge-caption="">{carrito.length}</span><span class="center">🛒 Mi Carrito</span>
                    </Link>
                </div>
            </>
        );

    }else {
        return <></>
    }
    
};

export default CartWidget;
