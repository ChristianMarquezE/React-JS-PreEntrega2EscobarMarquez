import './SocialIcons.css';
import "../Nav/Nav.css";
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../../CartWidget/CartWidget"
function SocialIcons(props) {


  
  return (
    <div class="social-icons2 montserrat-light">
      <Link class="contacto-link" to="pages/contacto.html">
        Contacto
      </Link>
      <Link
        class="instagram-icon"
        to="https://www.instagram.com/jorregodesign/"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </Link>
      <Link class="instagram-icon" to="mailto:jorregor@udd.cl" target="_blank">
        <i class="fa-regular fa-envelope"></i>
      </Link>
   
      <CartWidget></CartWidget>
    </div>
  );
}

export default SocialIcons;
