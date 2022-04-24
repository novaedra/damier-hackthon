import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./home";
import Single from "./home/single";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
