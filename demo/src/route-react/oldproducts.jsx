import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function OldProducts() {
  return (
    <div>
      <ul>
        <li>
          <Link to="1">Shirts</Link>
        </li>
        <li>
          <Link to="2">Kurtis</Link>
        </li>
        <li>
          <Link to="3">Leggings</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export function OldProductDetails() {
  const { id } = useParams();
  return <p>Old Product ID: {id}</p>;
}
