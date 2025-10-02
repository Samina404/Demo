import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
        <h1 className="font-bold text-lg">Undine</h1>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="/menu" className="hover:text-orange-500">Menu</a>
        <a href="/about" className="hover:text-orange-500">About</a>
        <a href="/contact" className="hover:text-orange-500">Contact</a>

        {/* Login Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <span>Login</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden z-10">
              <a
                href="/user/login"
                className="block px-4 py-2 hover:bg-gray-100 text-left"
              >
                User Login
              </a>
              <a
                href="/food-partner/login"
                className="block px-4 py-2 hover:bg-gray-100 text-left"
              >
                Food Partner Login
              </a>
              
            </div>
          )}
        </div>
      </nav>

      {/* Location Icon */}
      <button className="p-2 rounded-full hover:bg-gray-100">
        <MapPin className="w-6 h-6 text-black" />
      </button>
    </header>
  );
}
