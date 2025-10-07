// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

// ✅ Set your backend base URL here
axios.defaults.baseURL = "https://zomato-production-6259.up.railway.app";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    token: null,
    role: null,
    user: null,
  });

  // ✅ Load saved auth when the app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const user = localStorage.getItem("user");

    if (token && role && user) {
      try {
        setAuth({ token, role, user: JSON.parse(user) });
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // ✅ Login Function (for both user & food partner)
  const login = async (formData, isFoodPartner = false, redirectTo = "/") => {
    try {
      const endpoint = isFoodPartner
        ? "/api/auth/food-partner/login"
        : "/api/auth/user/login";

      const res = await axios.post(endpoint, formData);
      const token = res.data?.token ?? res.data?.accessToken ?? null;
      const role = isFoodPartner ? "foodPartner" : "user";

      let user =
        res.data?.user ||
        res.data?.data?.user ||
        res.data?.userData ||
        res.data?.data ||
        null;

      if (!user) {
        const { name, email } = res.data || {};
        if (name || email) user = { name, email, ...res.data };
      }

      if (token) localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      setAuth({ token, role, user });
      navigate(redirectTo);
      return true;
    } catch (err) {
      console.error("Login failed:", err.response?.data ?? err.message, err);
      return false;
    }
  };

  // ✅ Register Function
  const register = async (formData, isFoodPartner = false) => {
    try {
      const endpoint = isFoodPartner
        ? "/api/auth/food-partner/register"
        : "/api/auth/user/register";
      await axios.post(endpoint, formData);
      return true;
    } catch (err) {
      console.error("Register failed:", err.response?.data ?? err.message);
      return false;
    }
  };

  // ✅ Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setAuth({ token: null, role: null, user: null });
    navigate("/");
  };

  const isLoggedIn = !!auth.token && !!auth.user;

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isLoggedIn,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
