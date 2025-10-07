import { MapPin, ShoppingCart } from "lucide-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuth({ token: null, role: null, user: null });
    navigate("/");
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
    else navigate("/", { state: { scrollToFooter: true } });
  };

  const username =
    auth?.user?.name || auth?.user?.email?.split("@")[0] || "Guest";

  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-sm bg-orange-500 relative">
      <div className="flex items-center space-x-2">
        <h1 className="font-bold text-xl text-white">Savor</h1>
      </div>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-white font-medium items-center">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/menu" className="hover:text-yellow-300">
          Menu
        </Link>
        <button onClick={scrollToFooter} className="hover:text-yellow-300">
          About
        </button>
        <button onClick={scrollToFooter} className="hover:text-yellow-300">
          Contact
        </button>

        {auth?.token ? (
          <div className="flex items-center space-x-3">
            
            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded bg-white text-orange-600 font-medium hover:bg-yellow-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/user/login"
            className="hover:text-yellow-300 font-medium"
          >
            Login
          </Link>
        )}
      </nav>

      {/* Cart & Location */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-orange-400">
          <MapPin className="w-6 h-6 text-white" />
        </button>
        <Link to="/cart" className="relative p-2 rounded-full hover:bg-orange-400">
          <ShoppingCart className="w-6 h-6 text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-orange-600 text-white flex flex-col items-start p-5 space-y-4 md:hidden z-20">
          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          <Link to="/menu" onClick={() => setMobileMenu(false)}>
            Menu
          </Link>
          <button onClick={() => { scrollToFooter(); setMobileMenu(false); }}>
            About
          </button>
          <button onClick={() => { scrollToFooter(); setMobileMenu(false); }}>
            Contact
          </button>

          {auth?.token ? (
            <div className="flex flex-col space-y-2">
              
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenu(false);
                }}
                className="hover:text-yellow-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/user/login"
                className="hover:text-yellow-300"
                onClick={() => setMobileMenu(false)}
              >
                User Login
              </Link>
              <Link
                to="/food-partner/login"
                className="hover:text-yellow-300"
                onClick={() => setMobileMenu(false)}
              >
                Admin Login
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
