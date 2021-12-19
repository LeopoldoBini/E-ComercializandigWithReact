import { Link } from "react-router-dom";

const Item = ( {itm, i} ) => {

    const { id, title, description, image, price, category } = itm

    const pathToDetail = "item/"+id 
    return (


        <div class="col s3">
            <div class="card large hoverable">
                <div class="card-image">
                    <img src={image} style={{ height: "300px", }} alt={title}></img>
                    <span class="card-title" style={{ text_shadow: "1px 1px 2px black" }}>{title}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{category}<i class="material-icons right">more_vert</i></span>
                    <h5>${price}</h5>
                </div>
                <div class="card-reveal center-align">
                    <span class="card-title grey-text text-darken-4">{title}<i class="material-icons right">close</i></span>
                    <p>{description}</p>
                    <Link to= {pathToDetail}>
                        <button class="btn ">Comprar</button>
                    </Link>
                </div>
                <div class="card-action center-align">
                    <Link to= {pathToDetail}>
                        <button class="btn ">Ver detalle</button>
                    </Link>

                </div>
            </div>
        </div>


    )

}

export default Item;