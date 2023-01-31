import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import ProductList from "../components/ProductList";
export default () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProductos(res.data);
    });
  }, []);
  return (
    <div>
      <Form />
      <hr />
      {productos && <ProductList productos={productos} />}
    </div>
  );
};
