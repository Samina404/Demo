import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginFoodPartner, registerUser, registerFoodPartner } from "../services/api"; // ✅ correct

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    token: null,
    role: null, // "user" or "foodPartner"
  });

  // Load from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);

  // Login
  const login = async (formData, isFoodPartner = false) => {
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

      navigate("/dashboard");
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth({ token: null, role: null });
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
