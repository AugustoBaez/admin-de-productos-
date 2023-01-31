import React from "react";
import axios from "axios";
export default (props) => {
  console.log(props.people.product);

  let data = props.people;
  return (
    <div>
      <h2>All Products:</h2>
      <h3>{props.people}</h3>
      {/* {props.people.map((person, idx) => {
        <>
          <p key={idx}>
            {person.lastName}, {person.firstName}
          </p>
          ;
        </>;
      })} */}
    </div>
  );
};
