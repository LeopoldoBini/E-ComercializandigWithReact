import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailCointainer = (itemSeleccionado) => {

    const [itemDetail, setItemDetail] = useState(null)


    return <ItemDetail itm={itemSeleccionado}/>
}

export default ItemDetailCointainer;