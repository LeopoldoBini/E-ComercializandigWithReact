import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Main/>
            <Footer />
        </BrowserRouter>
    )
}



export default App;