import Button from '../CardProducts/Button';
import '../CardProducts/CardProduct.css';
import { Link, NavLink } from 'react-router-dom';
function Item(props) {
  const { price, title, text, img, id} = props;

  return (
    <div className="card">
      <img src={img} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p className="card-price">$ {price}</p>
        </div>
       
      </div>
      <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
    </div>
  );
}

export default Item;
//rfce
