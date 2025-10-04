import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { isLoggedIn, logout, role } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth"); // Redirect to login/register page
  };

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        🍔 Zomato
      </Link>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <span className="font-semibold">
              Logged in as: {role === "user" ? "User" : "Food Partner"}
            </span>
            <button
              onClick={handleLogout}
              className="bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth"
              className="bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Login / Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
