import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Documantion from "../pages/Documantion";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documention" element={<Documantion />} />

      </Routes>
    </div>
  );
}

export default Routing;
