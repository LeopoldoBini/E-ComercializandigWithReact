import AsideNavElement from "./AsideNavElement"
import { NavLink } from "react-router-dom"

const AsideNavList = ({objCatList}) =>{
    
    const listaCategorias = []
    for (const category in objCatList) {
        listaCategorias.push({category , catQuantity : objCatList[category]})
    }
    return  <aside id="asideNav" className="section">
        <h5 id="asideNav-Cat">Categorias:</h5>
        <div className="divider"></div>
        <ul>
        {listaCategorias.map((e,i)=>{
                    const path = `/categoria/${e.category}`
                    return <NavLink  to ={path} > <AsideNavElement key= {i} categoria={e}/> </NavLink>
                })}
        </ul>

    </aside>

}
export default AsideNavList