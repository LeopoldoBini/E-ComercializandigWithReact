import { ordenesDeCompraCollection } from "../firebase";
import { addDoc } from "firebase/firestore";
import { GlobalCartContext } from "./CartContext.js";
import { toast } from "react-toastify";
import CartElement from "./CartElement.js";
import { useContext, useState } from "react";
import validator from "validator";

const BuyingForm = () => {
  const initialValues = { nombre: "", apellido: "", email: "", tel: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [id, setId] = useState("");
  const { carrito, limpiarCarro, borrarDelCarro, totalAmount, totalQuantity } =
    useContext(GlobalCartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (inputs) => {
    const errors = {};

    const correctName = validator.isAlpha(inputs.nombre);
    const correctLastName = validator.isAlpha(inputs.apellido);
    const correctEmail = validator.isEmail(inputs.email);
    const correctTel = validator.isMobilePhone(inputs.tel);

    if (!correctName) {
      errors.nombre = "Necesitamos un Nombre!";
    }
    if (!correctLastName) {
      errors.apellido = "Necesitamos un Apellido!";
    }
    if (!correctTel) {
      errors.tel = "Necesitamos un Telefono para contactarte!";
    }
    if (!correctEmail) {
      errors.email = "Necesitamos un E-mail!";
    }

    setFormErrors(errors);
    return correctName && correctLastName && correctTel && correctEmail
      ? true
      : false;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (validate(formValues)) {
      const momentoPedido = new Date(Date.now()).toLocaleString();
      const orden = {
        date: momentoPedido,
        comprador: formValues,
        detalle: carrito,
        total: totalAmount,
      };
      const refOrderMandada = await toast.promise(
        addDoc(ordenesDeCompraCollection, orden),
        {
          pending: "Cargando Pedido",
          success: "Pedido recibido con Exito 👌",
          error: "Algo salió mal, vuelve a intentar 🤯",
        }
      );
      const idOrder = refOrderMandada.id;
      setId(idOrder);
      limpiarCarro();
      setIsSubmit(true);
    }
  };

  if (!isSubmit) {
    return (
      <div className="container row">
        <div className="container col s6">
          <h2>Datos Personales</h2>
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="first_name"
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                />
                <p className="formValidator">{formErrors.nombre}</p>
                <label for="first_name">Nombre</label>
              </div>

              <div className="input-field col s6">
                <input
                  id="last_name"
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                />
                <p className="formValidator">{formErrors.apellido}</p>
                <label for="last_name">Apellido</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                <p className="formValidator">{formErrors.email}</p>
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="Telefono"
                  type="tel"
                  name="tel"
                  onChange={handleChange}
                />
                <p className="formValidator">{formErrors.tel}</p>
                <label for="Telefono">Telefono de Contacto</label>
              </div>
            </div>
            <button className="btn " type="submit" onClick={submit}>
              Comprar
            </button>
          </form>
        </div>
        <section id="carritoaside" className="container col s6">
          <h5>
            {carrito.length} Productos | {totalQuantity} Unidades en Total{" "}
          </h5>
          <div className="">
            <ul className="collection">
              {carrito.map((e, i) => {
                return (
                  <CartElement
                    key={i}
                    itm={e}
                    borrarDelCarro={borrarDelCarro}
                  />
                );
              })}
              <div id="totalAPagar">
                <li className="collection-item avatar large">
                  <i className="material-icons circle red">monetization_on</i>
                  <span className="title">TOTAL A PAGAR </span>
                  <p>$ {totalAmount}</p>
                </li>
              </div>
            </ul>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <>
        <h1 className="center-align answer">Muchas Gracias por su compra</h1>
        <p className="center-align"> Id de compra : {id}</p>
      </>
    );
  }
};

export default BuyingForm;
