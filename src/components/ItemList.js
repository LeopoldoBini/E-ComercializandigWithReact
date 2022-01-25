import Item from "./Item";

const ItemList = ({listaDeItems}) => {
    
    return (
        <div className='row container '>

        {listaDeItems.map((e,i)=>{
            return <Item key= {i} itm = {e}/>
        })}
        </div>
    )
} 

export default ItemList;
