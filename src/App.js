import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CartContext from "./components/CartContext";




const App = () => {



    return (
        <BrowserRouter>
            <CartContext>


                <NavBar />
                <Main />
                <Footer />

            </CartContext>
        </BrowserRouter>
    )
}



export default App;