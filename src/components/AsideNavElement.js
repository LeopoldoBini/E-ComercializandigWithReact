

const AsideNavElement =({categoria})=>{

    const { category, catQuantity} = categoria

    

    return   <li className="asideNav-Element">
       
        <p>{category}  <span className="asideNav-ElementQuantity">  ({catQuantity})</span> </p>

    </li>


}

export default AsideNavElement
