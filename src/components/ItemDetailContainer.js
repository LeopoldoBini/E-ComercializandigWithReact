import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import ItemDetail from "./ItemDetail";

const ItemDetailCointainer = () => {

    const [itemDetail, setItemDetail] = useState([])
    const { id } = useParams()

    const getJustOneItem = () => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItemDetail(json))
            .catch(err => console.log("algo malo pasó:", err))
            console.log('pidiendo item ', id)
    }

    useEffect(() => {

        getJustOneItem()

    }, [id])

    return (
        <div className="container">
            <ItemDetail itm={itemDetail} />
        </div>
    )
}

export default ItemDetailCointainer;