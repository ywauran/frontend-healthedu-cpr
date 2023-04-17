import React from "react";
import { useParams } from "react-router-dom";

const Quis = () => {
  const { name, age, gender } = useParams();
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
      </ul>
    </div>
  );
};

export default Quis;
