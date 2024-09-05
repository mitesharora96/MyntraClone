import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "./Store";

function App() {
  let productList = [];
  const productDispatch = useDispatch();
  const getProductData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((pro) => {
        productDispatch(productActions.loadProductsReducer(pro.products));
        productList = pro.products;
      });
  };
  useEffect(getProductData, productList);
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
