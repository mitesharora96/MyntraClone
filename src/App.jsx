import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./Store/productsSlice";
import Spinner from "./Components/Spinner";
import { spinnerActions } from "./Store/spinner";

function App() {
  let productList = [];
  const loader = useSelector((act) => act.spinner);
  const loaderDispatch = useDispatch();
  const productDispatch = useDispatch();
  const getProductData = () => {
    loaderDispatch(spinnerActions.addLoader());
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((pro) => {
        productDispatch(productActions.loadProductsReducer(pro.products));
        productList = pro.products;
        loaderDispatch(spinnerActions.removeLoader());
      });
  };
  useEffect(getProductData, productList);
  return (
    <>
      <Header></Header>
      <div className="main-container d-flex">
        {loader ? <Spinner></Spinner> : <Outlet></Outlet>}
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
