import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CartContext from "./components/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {



    return (
        <BrowserRouter>
            <CartContext>


                <NavBar />
                <Main />
                <Footer />
                <ToastContainer />
            </CartContext>
        </BrowserRouter>
        
    )
}



export default App;