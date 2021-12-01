import CartWidget from "./CartWidget";
const NavBar = () => {

    return   <>   
        <nav>

            <div class="nav-wrapper">
            <a href="#" class="brand-logo center">E-comercializandig</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li> <a href="#">Ir Aca</a> </li>
                    <li> <a href="#">Alla</a> </li>
                    <li> <a href="#">o Más Alla</a> </li>
                </ul>
            <CartWidget></CartWidget>
            </div>


        </nav>
        </>
}
export default NavBar;