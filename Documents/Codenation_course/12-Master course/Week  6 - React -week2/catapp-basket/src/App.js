import Basket from './Components/Basket'
import data from './data';
import Main from './Components/Main';
import { useState } from 'react';
import Header from './Components/Header';

function App() {
  const {products}=data;
  const [BasketItems, setBasketItems] = useState([]);
  const AddItems = (product) => {
  const exist = BasketItems.find((x) => x.id === product.id);
  if (exist) {
    setBasketItems(
      BasketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
    );
  } else {
    setBasketItems([...BasketItems, { ...product, qty: 1 }]);
  }
};
const RemoveItems = (product) => {
  const exist = BasketItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setBasketItems(BasketItems.filter((x) => x.id !== product.id));
  } else {
    setBasketItems(
      BasketItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
  return (
    <div className="app">
       <Header countBasketItems={BasketItems.length}></Header>
       <div className='row'>
        <Main  products={products} AddItems={AddItems}></Main>
        <Basket 
          BasketItems={BasketItems}
          AddItems={AddItems}
          RemoveItems={RemoveItems}>
          </Basket>
    </div>
    </div>
  );
}

export default App
