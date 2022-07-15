import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  //   const cart = useSelector(state => state.cart);
  const { count, cart } = useSelector(state => ({
    ...state.CounterReducer,
    ...state.AddCartReducer,
  }));

  const [cartData, setCartData] = useState(0);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const addToCart = () => dispatch({ type: 'ADDCART', payload: cartData });
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
    </div>
  );
}
