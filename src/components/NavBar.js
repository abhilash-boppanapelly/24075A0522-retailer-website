import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: '#282c34', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Catalog</Link>
      <Link to="/registration" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Registration</Link>
      <Link to="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
      <Link to="/cart" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Cart</Link>
      <Link to="/contact" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Contact</Link>
      <Link to="/payment" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Payment</Link>
      <Link to="/invoice" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Invoice</Link>
    </nav>
  );
};

export default NavBar;
