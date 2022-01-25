import ItemListContainer from "./ItemListConainer";
import ItemDetailCointainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import CartContainer from "./CartContainer";
import BuyingForm from "./BuyingForm";

const Main = () => {
    return (
        <div id="main">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:tipo" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailCointainer/>}/>
                <Route path="/cart" element= {<CartContainer/>}></Route>
                <Route path="/finalizandoCompra" element= {<BuyingForm/>}></Route>
                
            </Routes>
        </div>
    )
}

export default Main
