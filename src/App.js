import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./components/MiContexto";

const App = () => {
  return (
    <BrowserRouter>
      <MiProvider>
        <Header />
        <Main />
      </MiProvider>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
