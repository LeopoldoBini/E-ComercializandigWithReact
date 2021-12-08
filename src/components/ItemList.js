import Item from "./Item";


const ItemList = (items) => {
    
    const [ uno, dos ,tres] = items.lista

    console.log('ttsadas', uno, items.lista)
    
    return <>
        <div class='row container'>
        <Item itm = {uno}/>
        <Item itm = {dos}/>
        <Item itm = {tres}/>
        </div>
    </>
}

export default ItemList;
