import React from 'react';

const Catalog = () => {
  
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.49 },
    { id: 3, name: 'Product 3', price: 15.0 },
  ];

  return (
    <div>
      <h2>Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
