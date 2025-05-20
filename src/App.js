import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Invoice from './components/Invoice';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </div>
    </div>
  );

}

export default App;

