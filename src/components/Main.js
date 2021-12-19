import ItemListContainer from "./ItemListConainer";
import ItemDetailCointainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:tipo" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailCointainer/>}/>
                <Route path="/cart" element= {<Cart/>}></Route>
            </Routes>
        </div>
    )
}

export default Main
