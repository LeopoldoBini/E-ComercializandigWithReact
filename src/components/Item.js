import { Link } from "react-router-dom";

const Item = ( {itm, i} ) => {

    const { id, title, description, image, price, category } = itm

    const pathToDetail = "/item/"+id 
    return (


        <div className="col s12  m6 l4 xl3">
            <div className="card large hoverable">
                <div className="card-image">
                    <img src={image} className="cardImg" alt={title}></img>
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{category}<i className="material-icons right">more_vert</i></span>
                    <h5>${price}</h5>
                </div>
                <div className="card-reveal center-align">
                    <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                    <p>{description}</p>
                    <Link to= {pathToDetail}>
                        <button className="btn ">Comprar</button>
                    </Link>
                </div>
                <div className="card-action center-align">
                    <Link to= {pathToDetail}>
                        <button className="btn ">Ver detalle</button>
                    </Link>

                </div>
            </div>
        </div>


    )

}

export default Item;