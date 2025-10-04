import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const { login } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Where the user came from (default: home page)
  const from = location.state?.from || "/";

  const handleLogin = async e => {
    e.preventDefault();
    const success = await login({ email, password }, false, from); // pass redirect path
    if (!success) alert("Login failed");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Login</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account? <Link to="/user/register" className="text-indigo-400">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
