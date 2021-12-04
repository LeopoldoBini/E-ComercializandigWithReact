import Counter from "./Counter";

const ItemListContainer = () => {

    let random = parseInt(Math.random()*10) 
    let stock = random > 5 ? random : 0
    console.log(`el stock es: ${stock}`)
    return <>
        <p>Este es el List Container</p>
        <Counter stock={stock} initial={1}/>
    </>

}

export default ItemListContainer;