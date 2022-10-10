import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Shop from "../../components/Shop/Shop";
import Invantorys from "../../components/Invantorys/Invantorys";
import About from "../../components/About/About";
import Orders from "../Orders/Orders";
import ProductAndCartLoader from "../../Loaders/ProductAndCartLoader";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/shop",
        loader: async () => {
          return await fetch("products.json");
        },
        element: <Shop></Shop>,
      },
      {
        path: "order",
        loader: ProductAndCartLoader,
        element: <Orders></Orders>,
      },
      {
        path: "/inventory",
        element: <Invantorys></Invantorys>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
    ],
  },
]);

export default route;
