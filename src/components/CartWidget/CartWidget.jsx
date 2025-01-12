import { Link, NavLink } from 'react-router-dom';

function CartWidget() {
  return (
    <Link className="instagram-icon" to="#">
      <i className="fa-solid fa-cart-shopping"></i>
      <span>10</span>
    </Link>
  );
}

export default CartWidget;
