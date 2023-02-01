import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'
const ProductList = () => {
  const [productos, setProductos] = useState([]);
  // const [prodId, setProdId] = useState([]);
  // const navigate = useNavigate()


  useEffect(() => {
    const getProductos = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/products/");
        setProductos(result.data.product.map((product) => product));
        // setProdId(result.data.product.map((product) => product._id));
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, []);

  
  return (
    <div>
      <h2>All Products</h2>
      {productos.map((prod) => (
        <>
        <div className="products">
          <h2>
            <a href={`/${prod._id}`}>{prod.title}</a>
          </h2>
        </div>
        </>
      ))}
    </div>
  );
};

export default ProductList;
