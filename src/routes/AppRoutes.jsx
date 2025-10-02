import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home";
import UserLogin from "../assets/pages/UserLogin";
import UserRegister from "../assets/pages/UserRegister";
import FoodPartnerLogin from "../assets/pages/FoodPartnerLogin";
import FoodPartnerRegister from "../assets/pages/FoodPartnerRegister";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/login" element={<UserLogin />} />
    <Route path="/user/register" element={<UserRegister />} />
    <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
    <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
  </Routes>
);

export default AppRoutes;
