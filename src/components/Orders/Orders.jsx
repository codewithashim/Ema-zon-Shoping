import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import RevewItems from "../RevewItems/RevewItems";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  console.log(initialCart)

  const [cart, savedCart] = useState(initialCart);

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="shopContainer">
        <div className="productContainer productRevContainer">
          {
            cart.map(product => <RevewItems product={product} key={product.id}></RevewItems>)
          }
        </div>
        <div className="cartContainer">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </section>
  );
};

export default Orders;
