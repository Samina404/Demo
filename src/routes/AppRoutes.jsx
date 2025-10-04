import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../assets/pages/Home";
import UserLogin from "../assets/pages/UserLogin";
import UserRegister from "../assets/pages/UserRegister";
import FoodPartnerLogin from "../assets/pages/FoodPartnerLogin";
import FoodPartnerRegister from "../assets/pages/FoodPartnerRegister";
import Checkout from "../assets/pages/Checkout";
import Cart from "../assets/pages/Cart";
import Success from "../assets/pages/Success";
import PrivateRoute from "../components/PrivateRoute";
import MenuPage from "../assets/pages/MenuPage";
import About from "../assets/pages/About";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuPage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<About/>} />
    <Route path="/user/login" element={<UserLogin />} />
    <Route path="/user/register" element={<UserRegister />} />
    <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
    <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
    <Route path ="/cart" element = {< Cart/>} />
    <Route path ="/checkout" element = {<Checkout/> } />
    <Route path ="/success" element = {<Success/> } />
<Route
  path="/checkout"
  element={
    <PrivateRoute>
      <success/>
    </PrivateRoute>
  }
/>

  </Routes>
);

export default AppRoutes;
