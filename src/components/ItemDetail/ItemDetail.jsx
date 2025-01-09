import { useEffect, useState } from "react";
import GetAsyncData from "../../data/getAsyncData";

function ItemDetailContainer() {
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    async function getItemData() {
      const response = await GetAsyncData();
      setItemInfo(response[6]); // Originalmente response[8], corregido a response[0] según la última imagen.
    }
    getItemData();
  }, []);

  console.log(itemInfo);

  return <div>ItemDetailContainer</div>;
}

export default ItemDetailContainer;