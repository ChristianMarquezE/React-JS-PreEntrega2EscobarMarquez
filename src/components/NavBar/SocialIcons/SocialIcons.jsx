import './SocialIcons.css';
import "../Nav/Nav.css";
function SocialIcons(props) {


  
  return (
    <div class="social-icons2 montserrat-light">
      <a class="contacto-link" href="pages/contacto.html">
        Contacto
      </a>
      <a
        class="instagram-icon"
        href="https://www.instagram.com/jorregodesign/"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a class="instagram-icon" href="mailto:jorregor@udd.cl" target="_blank">
        <i class="fa-regular fa-envelope"></i>
      </a>
      <a class="instagram-icon" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>
  );
}

export default SocialIcons;
