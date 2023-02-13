import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

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


  return (
    <div>
      <h2>All Products</h2>
      {productos.map((prod) => (
        <>
          <div className="products">
            <h2>
              <a href={`/${prod._id}`}>{prod.title}</a>
            </h2>
            <DeleteBtn id={prod._id} product={productos} setProductos={setProductos}/>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductList;
