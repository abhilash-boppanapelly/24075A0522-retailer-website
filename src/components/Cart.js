import React from 'react';

const Cart = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Product 1', quantity: 2, price: 10.99 },
    { id: 2, name: 'Product 2', quantity: 1, price: 20.49 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
};

export default Cart;
