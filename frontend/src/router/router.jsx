import { createBrowserRouter } from "react-router-dom";
import Shop from "./../pages/Shop";
import ShopCategory from "./../pages/ShopCategory";
import Product from "./../pages/Product";
import Cart from "./../pages/Cart";
import LoginSignup from "./../pages/LoginSignup";
import NotFound from "./../pages/NotFound";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Shop />,
      },
      {
        path: "/men",
        element: <ShopCategory />,
      },
      {
        path: "/women",
        element: <ShopCategory />,
      },
      {
        path: "/kids",
        element: <ShopCategory />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/login", element: <LoginSignup /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
