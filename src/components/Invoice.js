import React from 'react';

const Invoice = () => {
  // Sample invoice data
  const invoice = {
    id: 'INV-001',
    date: '2024-06-01',
    customer: 'abhi',
    items: [
      { id: 1, description: 'samsum m21 mobile', quantity: 2, price: 800},
      { id: 2, description: 'hp monitor', quantity: 1, price: 1000},
    ],
  };

  const total = invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Invoice</h2>
      <p>Invoice ID: {invoice.id}</p>
      <p>Date: {invoice.date}</p>
      <p>transaction Time  : 3:40 pm 20/05/2025 </p>
      <p></p>
      <p>Customer: {invoice.customer}</p>
      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px' }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" style={{ textAlign: 'right' }}><strong>Total</strong></td>
            <td><strong>${total.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
