import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function NewProducts() {
  return (
    <div>
      <ul>
        <li>
          <Link to="4">Denims</Link>
        </li>
        <li>
          <Link to="5">Jackets</Link>
        </li>
        <li>
          <Link to="6">Tops and tees</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export function NewProductDetails() {
  const { id } = useParams();
  return <p>New Product ID: {id}</p>;
}
