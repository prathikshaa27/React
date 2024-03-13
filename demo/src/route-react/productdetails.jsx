import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      {id && <p>Selected Product ID: {id}</p>}
    </div>
  );
}
