// Conmponente de Presentación -> UI
import Item from '../ItemList/Item'
import FlexContainer from './FlexContainer';
import '../../index.css'
function ItemList(props) {
  return (
    <div className='margin-top'>
      <h2>{props.greeting}</h2>
      <FlexContainer>
        {props.products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            text={item.category}
            img={item.img}
          />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;
