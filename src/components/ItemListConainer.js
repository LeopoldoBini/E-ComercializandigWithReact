import { useEffect, useState } from "react";
import Counter from "./Counter";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [items, setItems] = useState(null)
    const getItems = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setItems(json)
            console.log(json)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {

        getItems()

    }, [])


    if (!items) {
        return <>
            <div class="center-align">
            <h1>Cargando la magia</h1>
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-red">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-yellow">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>

                    <div class="spinner-layer spinner-green">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    } else {

        return <>
            <ItemList listaDeItems={items} />
            <p>Este es el List Container</p>
            <Counter stock={7} initial={1} />
        </>
    }
}

export default ItemListContainer;