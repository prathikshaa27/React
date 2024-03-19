import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/product")
    .then(response => {
    setProducts(response.data);
    })
    .catch(error => {
    console.error("Error fetching products:", error);
    });
    }, []);
    
return (
    <div>
    <h2>Dashboard</h2>
    <h3>List of Products</h3>
    <ul>
    {products.map((product, index) => (
    <li key={index}>
    {product.name} - ${product.price}
    </li>
    ))}
     </ul>
       </div>
  );
    };
    
export default Dashboard;
    
  

