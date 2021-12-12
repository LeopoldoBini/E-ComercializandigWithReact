
const Item = ({ itm }) => {

    const { title, description, image, price, category } = itm

    return <>


        <div class="col s3">
            <div class="card large">
                <div class="card-image">
                    <img src={image} style={{ height: "300px", }}></img>
                    <span class="card-title" style={{text_shadow: "1px 1px 2px black"}}>{title}</span>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{category}<i class="material-icons right">more_vert</i></span>
                    <h5>${price}</h5>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{title}<i class="material-icons right">close</i></span>
                    <p>{description}</p>
                </div>
                <div class="card-action center-align">
                    <button class="btn ">
                        Ver detalle
                    </button>

                </div>
            </div>
        </div>


    </>

}

export default Item;