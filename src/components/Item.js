import { Link } from "react-router-dom";

const Item = ( {itm, i} ) => {

    const { id, title, description, image, price, category } = itm

    const pathToDetail = "/item/"+id 
    return (


        <div className="col s12  m6 l4 xl3">
            <div className="card medium hoverable">
                <div className="card-image">
                    <img src={image} className="cardImg" alt={title}></img>
                    <span id="itm-title" >{category}</span>
                </div>
                <div id="itm-content">
                    <div id="activador">

                    <span  className=" activator">{title}</span><i className="activator material-icons right">more_vert</i>

                    </div>
                    <h3 id="itm-price">$ {price} </h3>
                </div>
                <div className="card-reveal center-align">
                    <span className="card-title">{title}<i className="material-icons right">close</i></span>
                    <p>{description}</p>
                    <Link to= {pathToDetail}>
                        <button className="btn ">Comprar</button>
                    </Link>
                </div>
                <div className="card-action center-align">
                    <Link to= {pathToDetail}>
                        <button id="itm-btn"className="btn ">Ver detalle</button>
                    </Link>

                </div>
            </div>
        </div>


    )

}

export default Item;