import { useEffect, useState } from "react";
import Counter from "./Counter";
import ItemList from "./ItemList";

const paqueteDeAfuera = [{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}]

const ItemListContainer = () => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        const promesa = new Promise((res)=> {
            setTimeout(()=>{
                res()
                console.log('se resolvio la promise')
            },2000)
        })
        promesa.then(()=>{

            console.log('conseguimos todo')
            setItems(paqueteDeAfuera)

        })
        .catch('no conseguimos nada')

    },[])
    

    let random = parseInt(Math.random() * 10)



    let stock = random > 5 ? random : 0
    console.log(`el stock es: ${stock}`)

    if (!items) {
        return <h1>Cargando la magia</h1>
    } else {

        return <>
            <ItemList lista={items}/>
            <p>Este es el List Container</p>
            <Counter stock={stock} initial={1} />
        </>
    }
}

export default ItemListContainer;