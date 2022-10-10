import React from "react";
import "./RevewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const RevewItems = ({ product,hendelRemoveItem }) => {
  const { name, quantity, price, img, shipping,id } = product;
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
        <button className="deleteBtn" onClick={()=>hendelRemoveItem(id)}>
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default RevewItems;
