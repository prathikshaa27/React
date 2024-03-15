import React from 'react';
import { Link } from 'react-router-dom';
export default function OldProducts() {
  return (
    <div>
      <ul>
        <li><Link to="/products/Shirts">Shirts</Link></li>
        <li><Link to="/products/Kurtis">Kurtis</Link></li>
        <li><Link to="/products/Leggings">Leggings</Link></li>
      </ul>
   
    </div>
  );
}
