import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import CartPage from "./Components/CartPage.jsx";
import { Provider } from "react-redux";
import productStore from "./Store/index.js";
import ProductDetail, {
  getProductDetail,
} from "./Components/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      { path: "/home", element: <HomePage></HomePage> },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) => {
          return getProductDetail(params.id);
        },
      },
      { path: "/my-cart", element: <CartPage></CartPage> },
      { path: "/features", element: <CartPage></CartPage> },
      { path: "/pricing", element: <CartPage></CartPage> },
      { path: "/about-us", element: <CartPage></CartPage> },
      { path: "/faqs", element: <CartPage></CartPage> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={productStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
