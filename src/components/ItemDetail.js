import { useContext } from "react";
import { GlobalCartContext } from "./CartContext.js";
import Counter from "./Counter.js";
import { Link } from "react-router-dom";

const ItemDetail = ({ itm }) => {
  const { title, price, category, description, image, rating, stock } = itm;
  


  const localCartContextValue = useContext(GlobalCartContext);

  const { carrito, agregarAlCarro } = localCartContextValue;
  console.log(carrito);

  return (
    <div className="container-large">
      <div className="row">
        <div className="col s12">
          <h1>{category} </h1>
        </div>
      </div>

      <div className="row">
        <div className="col s6 img">
          <img className="col s12" src={image} alt={title} />
        </div>

        <div className="col s6">
          <h3>{title}</h3>
          <div className="divider"></div>
          <div className="section flex">
            <meter
              className="col s4 right-align"
              max="5"
              min="0"
              value={rating.rate}
            ></meter>
            <h5>
              {rating.rate} <p>`({rating.count}) votos`</p>
            </h5>
          </div>

          <div className="divider col s12"></div>
          <h4>Por tan solo: $ {price}</h4>
          <p>Stock Disponible : {stock}</p>
          <div className="containerBotones">
            <Counter
              stock={stock}
              agregarAlCarro={agregarAlCarro}
              itmToCart={itm}
            />
          </div>
          <h5>{description}</h5>
          <div className="containerBotones">
            <Link to="/cart">
              
              <button>Ir al carrito</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
