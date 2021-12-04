import CartWidget from "./CartWidget";
const NavBar = () => {

    return   <>   
        <nav>

            <div class="nav-wrapper">
            <h1 href="#" class="brand-logo center">E-comercializandig</h1>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li> <p>Ir Aca</p> </li>
                    <li> <p>Alla</p> </li>
                    <li> <p>o Más Alla</p> </li>
                </ul>
            <CartWidget></CartWidget>
            </div>


        </nav>
        </>
}
export default NavBar;