import { Link, NavLink } from 'react-router-dom';

function CartWidget() {
  return (
    <Link class="instagram-icon" to="#">
      <i class="fa-solid fa-cart-shopping"></i>
      <span>10</span>
    </Link>
  );
}

export default CartWidget;
