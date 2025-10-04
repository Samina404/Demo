import { MapPin, ChevronDown, ShoppingCart } from "lucide-react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // import CartContext

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // get cart items
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0); // calculate total qty

   const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      // If Footer not in DOM, navigate home first
      navigate("/", { state: { scrollToFooter: true } });
    }
  };



  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-orange-500 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
        <img className="h-20 w-0" src="src/assets/photos/LOGO.svg" alt="Logo" />
        <h1 className="font-bold text-lg text-white">Savor</h1>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 text-white font-medium items-center">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/menu" className="hover:text-yellow-500">Menu</Link>
        <button onClick={scrollToFooter} className="hover:text-yellow-500">About</button>
        <button onClick={scrollToFooter} className="hover:text-yellow-500">Contact</button>

        {/* Login Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-1 hover:text-yellow-300"
          >
            <span>Login</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 shadow-md rounded-md overflow-hidden z-10">
              <Link
                to="/user/login"
                className="block px-4 py-2 hover:text-yellow-500 text-left text-white"
              >
                User Login
              </Link>
              <Link
                to="/food-partner/login"
                className="block px-4 py-2 hover:text-yellow-500 text-left text-white"
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        {/* Location Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MapPin className="w-6 h-6 text-black" />
        </button>

        {/* Cart Icon */}
        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100">
          <ShoppingCart className="w-6 h-6 text-black" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
