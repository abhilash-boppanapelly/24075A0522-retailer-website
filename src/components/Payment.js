import React, { useState } from 'react';

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processed successfully (simulation)');
    setFormData({
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div>
          <label>Card Number:</label><br />
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required maxLength="16" />
        </div>
        <div>
          <label>Cardholder Name:</label><br />
          <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required />
        </div>
        <div>
          <label>Expiry Date:</label><br />
          <input type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </div>
        <div>
          <label>CVV:</label><br />
          <input type="password" name="cvv" value={formData.cvv} onChange={handleChange} required maxLength="4" />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Pay</button>
      </form>
    </div>
  );
};

export default Payment;
