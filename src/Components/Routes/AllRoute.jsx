import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Home_Page/Home";
import SignIn from "../UserAuthPage/SignIn";

const AllRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
