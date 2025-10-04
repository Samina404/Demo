import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const { register } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async e => {
    e.preventDefault();
    const success = await register(form, false);
    if (success) alert("Registration successful");
    else alert("Registration failed");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Register</h2>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-700">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">Register</button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/user/login" className="text-indigo-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
