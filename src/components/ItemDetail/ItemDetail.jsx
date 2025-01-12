import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../../index.css"
import './ItemDetail.css';

function ItemDetail(props) {
  const { price, title, description, text, img, stock } = props;

  function onSubmitCount(count) {
    console.log(`Agregaste ${count} unidades al carrito`);
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <img className="item-detail-image" src={img} alt="product img" />
        <div className="item-detail-info">
          <h3 className="item-detail-title">{title}</h3>
          <p className="item-detail-text">{text}</p>
          <p className="item-detail-price">$ {price}</p>
          <p className="item-detail-description">{description}</p>
        </div>
        <div className="item-count-container">
          <ItemCount onSubmitCount={onSubmitCount} max={stock} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
