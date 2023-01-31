import React, { useEffect, useState } from "react";
import axios from "axios";

export default (props) => {
  const [producto, setProducto] = useState([]);

  console.log(props, "detail");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.match.params.id)
      .then((res) =>
        setProducto({
          ...res.data,
        })
      );
  }, []);

  console.log(producto);
  return (
    <div>
      <p>First Name: {producto.title}</p>
      <p>Last Name: {producto.description}</p>
    </div>
  );
};
