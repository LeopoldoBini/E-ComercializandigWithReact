import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CositoCargando from "./CositoCargando";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase.js";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { tipo } = useParams();

    const getItems = () => {


        if (!tipo) {

        const productos = collection(db, "products");
        const promesa = getDocs(productos);

        promesa
            .then((r) => {
                const productosFormateados = [];

                r.forEach((d) => productosFormateados.push(d.data()));
                console.log(productosFormateados);
                setItems(productosFormateados)
            })
            


            /*             fetch("https://fakestoreapi.com/products")
                      .then((res) => res.json())
                      .then((json) => {
                          setItems(json);
                      })
                      .catch((err) => console.log(err)); */


        } else {
            fetch(`https://fakestoreapi.com/products/category/${tipo}`)
                .then((res) => res.json())
                .then((json) => {
                    setItems(json);
                });
        }
    };

    useEffect(() => {
        getItems();
    }, [tipo]);

    if (!items) {
        console.log("cositocarg");
        return <CositoCargando />;
    } else {
        return <ItemList listaDeItems={items} />;
    }
};

export default ItemListContainer;
