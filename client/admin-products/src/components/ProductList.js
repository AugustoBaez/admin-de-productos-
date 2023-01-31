import React from "react";
import axios from "axios";
export default (props) => {
  return (
    <div>
      <h2>All Products:</h2>
      {/*       <h3>{props.people}</h3> */}
      {props.products.map((producto, idx) => {
        <>
          <p key={idx}>
            {producto.title}, {producto.price}, {producto.description}
          </p>
          ;
        </>;
      })}
    </div>
  );
};
