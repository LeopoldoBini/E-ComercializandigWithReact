const CartElement = ({itm, borrarDelCarro}) => {

    const { id, cantidad, detalle } = itm
    const totalElement = Math.round(((detalle.price *cantidad) + Number.EPSILON) * 100) / 100 
    const borrar = ()=>{
        borrarDelCarro(id)
    }

    return (
 
            <li className="collection-item avatar">
                <img src={detalle.image} alt="" className="circle" />
                <span className="title">{detalle.title}</span>
                <p>
                    $ {detalle.price} x {cantidad} <br/>
                   $ {totalElement}
                </p>
                
                    <i className="material-icons secondary-content"  onClick={borrar} >delete_forever</i>
                
            </li>
            
    );
};

export default CartElement;
