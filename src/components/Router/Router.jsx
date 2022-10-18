import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Shop from "../../components/Shop/Shop";
import Invantorys from "../../components/Invantorys/Invantorys";
import About from "../../components/About/About";
import Orders from "../Orders/Orders";
import ProductAndCartLoader from "../../Loaders/ProductAndCartLoader";
import Login from "../Login/Login";
import Regiser from "../Register/Register";
import Shepping from "../Shepping/Shepping";
import PrivetRoute from "./PrivetRoute";

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
        path: "/shipping",
        element: (
          <PrivetRoute>
            <Shepping></Shepping>
          </PrivetRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Shop></Shop>,
      },
      {
        path: "/register",
        element: <Regiser></Regiser>,
      },
    ],
  },
]);

export default route;
