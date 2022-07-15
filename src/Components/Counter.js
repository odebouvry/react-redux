import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../redux/reducers/dataImgReducer';

export default function Counter() {
  //   const cart = useSelector(state => state.cart);
  const { count, cart, imgURL } = useSelector(state => ({
    ...state.counterReducer,
    ...state.addCartReducer,
    ...state.dataImgReducer,
  }));

  const [cartData, setCartData] = useState(0);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const addToCart = () => dispatch({ type: 'ADDCART', payload: cartData });
  const showCat = () => dispatch(getCatImg());
  useEffect(() => {
    dispatch(getCatImg());
  }, []);
  return (
    <div>
      <h2>Les données : {count}</h2>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
      <hr />
      <h2>Cart data : {cart}</h2>
      <input
        onInput={e => setCartData(e.target.value)}
        value={cartData}
        type="number"
      />
      <button onClick={addToCart}>Ajouter au panier</button>
      <hr />
      <h2>Image de chat aléatoire</h2>
      <button onClick={showCat}>changer de chat</button>
      <div>
        {imgURL && <img src={imgURL} alt="cat" style={{ width: '300px' }} />}
      </div>
    </div>
  );
}
