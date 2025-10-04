import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

axios.defaults.baseURL = "http://localhost:5000"; // backend base URL

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ token: null, role: null });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) setAuth({ token, role });
  }, []);

  const login = async (formData, isFoodPartner = false, redirectTo = "/") => {
  try {
    const endpoint = isFoodPartner
      ? "/api/auth/food-partner/login"
      : "/api/auth/user/login";

    const res = await axios.post(endpoint, formData);
    const token = res.data.token;
    const role = isFoodPartner ? "foodPartner" : "user";

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setAuth({ token, role });

    navigate(redirectTo); // redirect after login
    return true;
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    return false;
  }
};

  const register = async (formData, isFoodPartner = false) => {
    try {
      const endpoint = isFoodPartner
        ? "/api/auth/food-partner/register"
        : "/api/auth/user/register";

      const res = await axios.post(endpoint, formData, { withCredentials: true });
      console.log("Registration successful:", res.data);
      return true;
    } catch (err) {
      console.error("Register failed:", err.response?.data || err.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });
    navigate("/");
  };

  const isLoggedIn = !!auth.token;

  return (
    <AuthContext.Provider value={{ ...auth, isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
