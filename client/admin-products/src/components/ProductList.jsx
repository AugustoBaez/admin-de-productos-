import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteBtn from "./DeleteBtn";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getProductos = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/products/");
        setProductos(...productos, result.data.product.map((product) => product));
        setLoaded(true)
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, []);

  const removeProd = (prodId) => {
    setProductos(productos.filter(prod => prod._id !== prodId))
  }

  return (
    <div>
      <h2>All Products</h2>
      {productos.map((prod) => (
        <>
          {loaded &&
            <div className="products">
              <h2>
                <a href={`/${prod._id}`}>{prod.title}</a>
              </h2>
              <DeleteBtn id={prod._id} removeProd={removeProd} />
            </div>
          }
        </>
      ))}
    </div>
  );
};

export default ProductList;
