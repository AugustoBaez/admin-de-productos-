import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/products/");
        setProductos(result.data.product.map((product) => product));
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, []);

  console.log(productId);
  return (
    <div>
      <h2>All Products</h2>
      {productos.map((prod) => (
        <>
          <h2>
            <a href={`/${prod._id}`}>{prod.title}</a>
          </h2>
          {/*           <h2>{prod._id}</h2> */}
        </>
      ))}
    </div>
  );
};

export default ProductList;
