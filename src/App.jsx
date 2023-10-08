import React from "react";
import appStyle from "./App.module.css";
import HomePage from "./components/home/HomePage";
import ErrorPage from "./components/error/ErrorPage";
import AboutPage from "./components/about/AboutPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className={appStyle.container}>
      <div className={appStyle.navbar}>
        <Navbar/>
      </div>
      <div className={appStyle.routes}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
