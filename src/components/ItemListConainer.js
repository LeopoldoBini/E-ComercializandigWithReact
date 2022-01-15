import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CositoCargando from "./CositoCargando";
import { db } from "../firebase.js";
import { addDoc, collection, getDocs, query, where} from "firebase/firestore";

import 'react-toastify/dist/ReactToastify.css';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { tipo } = useParams();



    const getItems = () => {


        if (!tipo) {

            const traerProd = async () => {
                const coleccionDeProd = collection( db, "products")
                const consult = await getDocs(coleccionDeProd)
                
        
                const docs_ref = consult.docs
        
                const productosFormateados = docs_ref.map( doc => {
                    return {...doc.data()}
                })
                console.log ( productosFormateados, 'este es el console que estoy esperando')
                setItems(productosFormateados)
                
                
            }
            traerProd()

//  fetch("https://fakestoreapi.com/products")



        } else {
            
            const traerCatergory = async () => {
                const coleccionDeProd = collection( db, "products")
                const constrain = where("category","==" , tipo)
                const queryForCategory = query(coleccionDeProd , constrain)
                const consult = await getDocs(queryForCategory)
        
                const docs_ref = consult.docs
        
                const productosFormateados = docs_ref.map( doc => {
                    return {...doc.data()}
                })
                console.log ( productosFormateados, 'con constrain')
                setItems(productosFormateados)

            }

            traerCatergory()


        }
    };

/*     const subirProd = async () => {

        const arryConStock = arryDefakeStore.map( item => {
            let stock = parseInt(Math.random()*10)+1
            return {...item , stock}
        })
        console.log(arryConStock)
        const coleccionDeProd = collection( db, "products")

        const idSubidos= []
        try {
            arryConStock.forEach((itm) => {
                const refSubidaCorrecta = addDoc(coleccionDeProd, itm);
                const idSubida = refSubidaCorrecta.id;
                idSubidos.push(idSubida);
            })
    
            toast.success(`Subido con Exito ${idSubidos.length} productos`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            console.log(idSubidos, 'Lista de SUbidas')

        }catch (error) {
            toast.error(`Srry , ${error} `, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            console.log(error)
        }
        
    } */
    useEffect(() => {
        getItems();
        
    }, [tipo]);

    if (!items) {
        console.log("cositocarg");
        return <CositoCargando />;
    } else {
        return <>
        <ItemList listaDeItems={items} />
        

        </>
        
    }
};

export default ItemListContainer;

