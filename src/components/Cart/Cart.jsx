import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, clearCart, children }) => {
  console.log(cart);
  let total = 0;
  let shepping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total += product.price;
    shepping += product.shipping;
  }

  const text = (total * 0.1).toFixed(2);
  const grandTotal = total + shepping + parseFloat(text);
  return (
    <section className="cardCont">
      <h4>Selected Items : {quantity}</h4>
      <p>Total Price : $ {total} </p>
      <p>Total Shepping :$ {shepping} </p>
      <p>Tex : {text}</p>
      <h3>Geand Total :$ {grandTotal}</h3>
      <button className="clearCart" onClick={() => clearCart()}>
        <FontAwesomeIcon
          style={{ marginRight: "0.5rem" }}
          icon={faTrashAlt}
        ></FontAwesomeIcon>
        Cear Cart
      </button>
      {children}
    </section>
  );
};

export default Cart;
