import { useState } from "react";
import { newsLetterCollection } from "../firebase";
import { addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

import handshake from "../assets/handshake (1).png";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
import isAlpha from "validator/lib/isAlpha";

const NewsletterForm = () => {
  const initialValues = { nombre: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (inputs) => {
    const errors = {};

    const correctName = isAlpha(inputs.nombre);
    const correctEmail = isEmail(inputs.email);
    if (!correctName) {
      errors.nombre = "Necesitamos un Nombre!";
    }
    if (!correctEmail) {
      errors.email = "Necesitamos un E-mail!";
    }
    setFormErrors(errors);
    return correctName && correctEmail ? true : false;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (validate(formValues)) {
      const momentoPedido = new Date(Date.now()).toLocaleString();
      const datosContacto = { ...formValues, momentoPedido };
      await toast.promise(addDoc(newsLetterCollection, datosContacto), {
        pending: "Solicitando Permiso..",
        success: "Bienvenido a las REEBAJAS 🤪",
        error: "Algo salió mal, vuelve a intentar 🤯"},
        {
        position: toast.POSITION.BOTTOM_CENTER,
        Theme: "light",
        })
      

      setIsSubmit(true);
    } else {
      setTimeout(() => { setFormErrors({})} , 2500)
    }
  };
  return !isSubmit ? (
    <form action="">
      <ul>
        <li>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            onChange={handleChange}
          />
        </li>
        <p className="formValidator">{formErrors.nombre}</p>
        <li>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="e-mail"
            required
            onChange={handleChange}
          />
        </li>
        <p className="formValidator">{formErrors.email}</p>
      </ul>
      <button
        id="btnNewsletter"
        className="btn btn-small waves-effect waves-light blue-grey lighten-2"
        type="submit"
        name="action"
        onClick={submit}
      >
        Recibir Ofertas!
      </button>
      
    </form>
  ) : (
    <>
      <h5 className="center-align pie__logo">
        <img src={handshake} alt="" />
      </h5>
      
    </>
  );
};

export default NewsletterForm;
