import Counter from "./Counter";
const Item = ({itm}) => {

    const {title,description,image,price} = itm

    return <>


            <div class="col s3">
            <div class="card large">
                <div class="card-image">
                <img src={image}></img>
                <span class="card-title">{title}</span>
                </div>
                <div class="card-content">
                <h5>${price}</h5>
                <p>{description}</p>
                </div>
                <div class="card-action">
                

                </div>
            </div>
            </div>


    </>

}

export default Item;