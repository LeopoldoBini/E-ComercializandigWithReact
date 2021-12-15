import Item from "./Item";

const ItemList = ({listaDeItems}) => {
    
    return <>
        <div class='row container'>
        {listaDeItems.map((e,i)=>{
            return <Item i= {i} itm = {e}/>
        })}
        </div>
    </>
} 

export default ItemList;
