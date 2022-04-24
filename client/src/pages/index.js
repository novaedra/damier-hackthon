import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Sidebar from "../components/Sidebar";
import HomePage from "./home";

const Root = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
