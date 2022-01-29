import { useState } from "react";
import { toast } from "react-toastify";

const Counter = ({ stock, agregarAlCarro, itmToCart }) => {
  const [quantity, setQuatity] = useState(1);

  const onAdd = () => {
    agregarAlCarro(itmToCart.id, quantity, itmToCart);
    toast.success("🐱‍🏍Agregado al carrito! ✔");

    setQuatity(1);
  };

  const sumar = () => {
    if (quantity < stock) setQuatity(quantity + 1);
  };
  const restar = () => {
    if (quantity >= 2) setQuatity(quantity - 1);
  };

  if (stock > 0) {
    return (
      <>
      <p id="disponibilidad">{stock} U. Disponibles</p>
        <div id="contador">
          <div id="cuenta">
            <h5 id="cantidad"> {quantity}</h5>
          </div>
          <div id="modificadores">
            <button className="modificarcuenta" onClick={sumar}>
              👆
            </button>
            <button className="modificarcuenta" onClick={restar}>
              👇
            </button>
          </div>
          <button id="agregar" onClick={onAdd}>
            Agregar al Carrito
          </button>
        </div>

        <div id="botonera"></div>
      </>
    );
  } else {
    return <h1>No Tenemos Stock, perdon</h1>;
  }
};

export default Counter;
