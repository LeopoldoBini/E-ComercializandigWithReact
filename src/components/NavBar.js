import CartWidget from "./CartWidget";
import logo from "../assets/react.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header id="header">
      <div class="contenedor__header">
          
            <NavLink to ="/">
        <div class="contenedor__header__logo">
          <img
            src={logo}
            alt=""
            id="logoHeader"
            />
          <h2 id="marca">E-Comercializing</h2>
        </div>
            </NavLink>
        <div class="contenedor__header__contenedorNav">
          <div class="contenedor__header__nav" id="redesHeader">
            <ul class="contenedor__header__ul">
              <li className="contenedor__header__li">
                <i className="fab fa-facebook-square"></i> 
              </li>
              <li className="contenedor__header__li">
                <i className="fab fa-instagram"></i> 
              </li>
              <li className="contenedor__header__li">
                <i className="fab fa-pinterest-square"></i> 
              </li>
              
              <CartWidget></CartWidget>
              
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
