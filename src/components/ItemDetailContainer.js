import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailCointainer = () => {

    const [itemDetail, setItemDetail] = useState([])
    const { id } = useParams()

    const getJustOneItem = () => {


        const getItem = async () =>{
            const prodCollection =  collection(db , "products")
            const constrain = where("id","==" , parseInt(id))
            const queryForId = query(prodCollection, constrain)
            const prodDocument = await getDocs(queryForId)

            const prodDocRef = prodDocument.docs

            const prodForm = prodDocRef.map( p => {

                return {...p.data()}

            })
            const itm = prodForm[0]

            console.log(itm, 'esta es del detail')
            setItemDetail(itm)
        }
        getItem()
        // TOCAR ACAA



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




