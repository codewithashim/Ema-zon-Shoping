import { getStoreCart } from "../fakeData/fakedb";

const ProductAndCartLoader = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  // get cat from local storage

  const savedCart = getStoreCart();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      initialCart.push(addedProduct);
    }
  }

  return {products, initialCart};
};

export default ProductAndCartLoader;
