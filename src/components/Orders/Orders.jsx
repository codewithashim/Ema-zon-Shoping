import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import RevewItems from "../RevewItems/RevewItems";
import "./Orders.css";
import {removeFromDb} from "../../fakeData/fakedb.js";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const hendelRemoveItem=(id)=>{
    const reminigCart=cart.filter(product=>product.id!==id)
    setCart(reminigCart)
    removeFromDb(id)
  }

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="shopContainer">
        <div className="productContainer productRevContainer">
          {cart.map((product) => (
            <RevewItems product={product} key={product.id} hendelRemoveItem={hendelRemoveItem}></RevewItems>
          ))}
        </div>
        <div className="cartContainer">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </section>
  );
};

export default Orders;
