import getAsyncData, { getAsyncItemsByCategory } from '../../data/getAsyncData';
import { getAsyncItemsByColeccion } from '../../data/getAsyncData';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  console.log('%cRender de ItemListContainer', 'color: yellow');
  const { catid } = useParams();
  const { colid } = useParams();

  // Si tenemos un param "catid" entonces solicitamos solo los productos de esa categoria

  useEffect(() => {
    if (catid === undefined && colid === undefined) {
      const respuestaPromise = getAsyncData();
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
    if (catid !== undefined) {
      const respuestaPromise = getAsyncItemsByCategory(catid);
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
    if (catid === undefined && colid !== undefined) {
      const respuestaPromise = getAsyncItemsByColeccion(colid);
      console.log(respuestaPromise);
      respuestaPromise
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => alert(error));
    }
  }, [catid, colid]);

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
