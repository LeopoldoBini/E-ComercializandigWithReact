import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <nav>

            <div class="nav-wrapper">
            
            <h1 style={{margin : "auto"}} class="brand-logo center valign-wrapper"> <NavLink to ="/">E-comercializandig</NavLink></h1>    
                
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li> <NavLink to = "categoria/women's clothing"> women's clothing </NavLink> </li>
                    <li> <NavLink to = "categoria/men's clothing"> men's clothing </NavLink> </li>
                    <li> <NavLink to = "categoria/electronics"> electronics </NavLink> </li>
                    <li> <NavLink to = "categoria/jewelery"> jewelery </NavLink> </li>
                </ul>
            <CartWidget></CartWidget>
            </div>


        </nav>
    )
}
export default NavBar;