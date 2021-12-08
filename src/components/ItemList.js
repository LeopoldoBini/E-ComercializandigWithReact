import Item from "./Item";


const ItemList = ({listaDeItems}) => {
    
    return <>
        <div class='row container'>
        {listaDeItems.map((e)=>{
            return <Item itm = {e}/>
        })}
        </div>
    </>
}

export default ItemList;
