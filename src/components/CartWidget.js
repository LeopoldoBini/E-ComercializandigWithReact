import { Link } from "react-router-dom";
import {GlobalCartContext} from "./CartContext.js";
import { useContext } from "react";
import cart from "../assets/shopping-cart (1).png"

const CartWidget = () => {
    
    const {carrito } = useContext(GlobalCartContext)
    
    if (carrito.length !== 0){

        return (
            <>
                <li id="cartWidget">
                    <Link to="/cart">
                    <img src={cart} alt="carrito" id="header-cart"/>
                    <span id="badge">{carrito.length}</span>
                    </Link>
                </li>
            </>
        );

    }else {
        return <></>
    }
    
};

export default CartWidget;
