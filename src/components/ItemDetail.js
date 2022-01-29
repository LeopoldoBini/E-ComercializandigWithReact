import { useContext } from "react";
import { GlobalCartContext } from "./CartContext.js";
import Counter from "./Counter.js";
import { Link } from "react-router-dom";

const ItemDetail = ({ itm }) => {
  const { title, price, category, description, image, rating, stock } = itm;

  const localCartContextValue = useContext(GlobalCartContext);

  const { carrito, agregarAlCarro } = localCartContextValue;


  return (
    <div className="container-large">
      <div className="row">
        <div className="col s12">
          <h2 id="idc-category">{category} </h2>
        </div>
      </div>

      <div className="row">
        <div className="col s6 img">
          <img className="col s12" src={image} alt={title} />
        </div>

        <div className="col s6">
          <h3 id="idc-title">{title}</h3>
          <div className="divider"></div>
          <div id="puntos">
            <p id="rate">{rating.rate} / 5</p>
            <meter
              id="meter"
              min="0"
              low="1"
              high="4"
              max="5"
              value={rating.rate}
              optimum="5"
            ></meter>
            <p id="votes">({rating.count}) votos</p>
          </div>

          <div className="divider col s12"></div>

          <h5 id="idc-prePrice">Por tan solo: <span id="idc-precio">$ {price} </span></h5>

          
          <div className="containerBotones">
            <Counter
              stock={stock}
              agregarAlCarro={agregarAlCarro}
              itmToCart={itm}
            />
          </div>
          <div className="divider"></div>
          <p id="idc-desc">{description}</p>
          <div className="containerBotones">
            {carrito.length === 0 ? (
              ""
            ) : (
              <Link to="/cart">
                <button id="irAlCarro"> Ir al carrito 🤪</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
