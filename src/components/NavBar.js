import CartWidget from "./CartWidget";
const NavBar = () => {

    return   <>   
        <nav>

            <div class="nav-wrapper">
            <h1 style={{margin : "auto"}} class="brand-logo center valign-wrapper">E-comercializandig</h1>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li> <i>Ir Aca</i> </li>
                    <li> <i>Alla</i> </li>
                    <li> <i>o Más Alla</i> </li>
                </ul>
            <CartWidget></CartWidget>
            </div>


        </nav>
        </>
}
export default NavBar;