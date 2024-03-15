import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartactions';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart=(itemId)=>{
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;