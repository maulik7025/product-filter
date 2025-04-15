import { useLocation, useNavigate } from "react-router";

const ProductDetail = () => {
  const location = useLocation();
  
  const { product } = location.state;

  const navigate = useNavigate();

  // console.log(product);

  if (!product) {
    return (
      <div>
        <h2>Product data not available</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="container single-product">
      <img src={product.image} alt="Images" />
      <h1>{product.title}</h1>
      <p>Id: {product.id}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate(-1)}>Back to Product Page</button>
    </div>
  );
};

export default ProductDetail;
