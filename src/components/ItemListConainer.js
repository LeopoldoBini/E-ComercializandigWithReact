import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import CositoCargando from "./CositoCargando";



const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { tipo } = useParams()

    const getItems = () => {
        if (!tipo) {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    setItems(json)
                })
                .catch(err => console.log(err))

        } else {
            fetch(`https://fakestoreapi.com/products/category/${tipo}`)
                .then(res => res.json())
                .then(json => {
                    setItems(json)
                })
        }
    }

    useEffect(() => {

        getItems()
    }, [tipo])


    if (!items) {
        return <CositoCargando />

    } else {

        return <ItemList listaDeItems={items} />



    }
}

export default ItemListContainer;