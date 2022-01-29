import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CositoCargando from "./CositoCargando";
import { prodCollection } from "../firebase.js";
import { getDocs, query, where } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();
  const [loading, setLoading] = useState(true);
  const [objCatList, setCatList] = useState([]);

  const getItems = async () => {
    setLoading(true);
    if (!tipo) {
      const traerProd = async () => {
        const consult = await getDocs(prodCollection);

        const docs_ref = consult.docs;

        const productosFormateados = docs_ref.map((doc) => {
          return { ...doc.data() };
        });

        const listaCategorias = productosFormateados.map(({category}) => category)
        
        const objCategoriasUnicas = [...new Set(listaCategorias)].reduce((a, b )=> {
          const reducer = {...a}
          reducer[b] = 0
          return reducer
        },{});


        const objCategoriasQuantity = listaCategorias.reduce((a, b)=>{
          const reducer = {...a}
          reducer[b] += 1
          return reducer
        },objCategoriasUnicas)
        



        setItems(productosFormateados);
        setCatList(objCategoriasQuantity) 
        setLoading(false);
      };
      traerProd();
    } else {
      const traerCatergory = async () => {
        const constrain = where("category", "==", tipo);
        const queryForCategory = query(prodCollection, constrain);
        const consult = await getDocs(queryForCategory);

        const docs_ref = consult.docs;

        const productosFormateados = docs_ref.map((doc) => {
          return { ...doc.data() };
        });
        setItems(productosFormateados);
        setLoading(false);
      };

      traerCatergory();
    }
  };

  useEffect(() => {
    getItems();
  }, [tipo]);

  return loading ? <CositoCargando /> : <ItemList listaDeItems={items} objCatList={objCatList} />;
};

export default ItemListContainer;
