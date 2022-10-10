import React from "react";
import "./RevewItems.css";

const RevewItems = ({ product }) => {
  const { name, quantity, price, img, shipping } = product;
  return (
    <div className="revewContainer">
      <div className="productRevImg">
        <img src={img} alt="product" />
      </div>
      <div className="productRevDetails">
        <h6>{name}</h6>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
        <p>Shipping: {shipping}</p>
      </div>
      <div className="deletButton">
        <button></button>
      </div>
    </div>
  );
};

export default RevewItems;
