import Item from "./Item";
import AsideNavList from "./AsideNavList";

const ItemList = ({listaDeItems , objCatList}) => {
    


    return (
        <div id="" className='row container '>
            <div className="col s2">
                <AsideNavList
                 objCatList={objCatList}/>
            </div>

            <div className="col s10">
                {listaDeItems.map((e,i)=>{
                    return <Item key= {i} itm = {e}/>
                })}
            </div>
        </div>
    )
} 

export default ItemList;
