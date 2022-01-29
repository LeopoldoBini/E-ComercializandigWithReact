import NewsletterForm from "./NewsletterForm";
import logo from "../assets/online-shopping.png";

const Footer = () => {
  return (
    <footer>
      <div className="pie">
        <div className="pie__caja pie__cajaLogo">
          <div className="pie__logo">
            <img src={logo} alt="" />
          </div>
          <div className="pie__terms">
            <p>Envios sin cargo a todo el pais a partir de los 500 USD </p>
          </div>
        </div>

        <div className="pie__caja">
          <h2>Newsletter</h2>
          <NewsletterForm></NewsletterForm>
        </div>

        <div className="pie__caja">
          <h2>Redes Sociales</h2>
          <ul>
            <li>
              <i className="fab fa-facebook-square"></i> Facebook
            </li>
            <li>
              <i className="fab fa-instagram"></i> Instagram
            </li>
            <li>
              <i className="fab fa-pinterest-square"></i> Pinterest
            </li>
          </ul>
        </div>
      </div>

      <div className="pie__copyright">
        <hr />
        <p>
          Todos los derechos reservados <b>™ Comprando con Leopoldo</b> 2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
