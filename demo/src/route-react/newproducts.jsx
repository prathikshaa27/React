import React,{Link,Outlet} from 'react';


export default function NewProducts() {
  return (
    <div>
      <ul>
       <li>Denims</li>
      <li>Jackets</li>
     <li>Tops and tees</li>
      </ul>
      <Outlet />
    </div>
  );
}

