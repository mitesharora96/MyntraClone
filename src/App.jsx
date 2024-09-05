import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import { Outlet } from "react-router-dom";

function App() {
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
