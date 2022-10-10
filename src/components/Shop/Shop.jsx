import { React, useEffect, useState } from "react";
import "./Shop.css";
import Product from "./../Product/Product";
import Cart from "./../Cart/Cart";
import { addToDb, deleteShoppingCart, getStoreCart } from "../../fakeData/fakedb";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useState([]);
  // const products = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const clearCart =()=>{
    setCart([])
    deleteShoppingCart()
  }

  useEffect(() => {
    const storeCart = getStoreCart();
    const savedCard = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        savedCard.push(addedProduct);
      }
    }
    setCart(savedCard);
  }, [products]);

  useEffect(() => {
    const savedCard = [];
    const storeCard = getStoreCart();
    for (const id in storeCard) {
      const addedProduct = products.find((p) => p.id === id);
      if (addedProduct) {
        const quantity = storeCard[id];
        addedProduct.quantity = quantity;
        savedCard.push(addedProduct);
      }
    }
    setCart(savedCard);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <section id="shopSection">
      <div className="productsContainer">
        {products.map((product) => {
          return (
            <section className="producSection">
              <Product
                addToCart={addToCart}
                product={product}
                key={product.id}
              ></Product>
            </section>
          );
        })}
      </div>
      <div className="cartContainer">
        <h2 style={{ textAlign: "center" }}>Order Summary</h2>
        <div className="cartDetails">
          <Cart clearCart={clearCart} cart={cart}>
            <Link to="/order">
              <button className="revewOrderBtn">Revew Orders</button>
            </Link>
          </Cart>
        </div>
      </div>
    </section>
  );
};

export default Shop;
