const CartElement = ({itm, borrarDelCarro}) => {

    const { id, cantidad, detalle } = itm
    const totalElement = detalle.price *cantidad
    const borrar = ()=>{
        borrarDelCarro(id)
    }

    return (
 
            <li class="collection-item avatar">
                <img src={detalle.image} alt="" class="circle" />
                <span class="title">{detalle.title}</span>
                <p>
                    $ {detalle.price} x {cantidad} <br/>
                   $ {totalElement}
                </p>
                
                    <i class="material-icons secondary-content"  onClick={borrar} >delete_forever</i>
                
            </li>
            
    );
};

export default CartElement;
