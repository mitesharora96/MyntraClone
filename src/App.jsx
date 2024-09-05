import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
