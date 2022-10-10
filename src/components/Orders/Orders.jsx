import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import RevewItems from "../RevewItems/RevewItems";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../fakeData/fakedb.js";
import { Link } from "react-router-dom";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const hendelRemoveItem = (id) => {
    const reminigCart = cart.filter((product) => product.id !== id);
    setCart(reminigCart);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <section style={{ paddingTop: "5rem" }}>
      <div className="shopContainer">
        <div className="productContainer productRevContainer">
          {cart.map((product) => (
            <RevewItems
              product={product}
              key={product.id}
              hendelRemoveItem={hendelRemoveItem}
            ></RevewItems>
          ))}
          {cart.length === 0 && (
            <h1 style={{ textAlign: "center" }}>
              Your Cart is Empty <Link to="/">Shope More</Link>
            </h1>
          )}
        </div>
        <div className="cartContainer">
          <Cart clearCart={() => clearCart()} cart={cart}></Cart>
        </div>
      </div>
    </section>
  );
};

export default Orders;
