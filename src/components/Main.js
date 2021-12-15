import ItemListContainer from "./ItemListConainer";
import ItemDetailCointainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:tipo" element={<ItemListContainer/>}/>
            </Routes>
        </div>
    )
}

export default Main
