import { MapPin, ChevronDown, ShoppingCart, Menu, X, User } from "lucide-react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [user, setUser] = useState(null); // track logged-in user
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToFooter: true } });
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-sm bg-orange-500 relative">
      <div className="flex items-center space-x-2">
        <h1 className="font-bold text-xl text-white">Savor</h1>
      </div>

      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      <nav className="hidden md:flex space-x-8 text-white font-medium items-center">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/menu" className="hover:text-yellow-300">Menu</Link>
        <button onClick={scrollToFooter} className="hover:text-yellow-300">About</button>
        <button onClick={scrollToFooter} className="hover:text-yellow-300">Contact</button>

        {/* User Icon / Login */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center space-x-1 hover:text-yellow-300"
            >
              <User className="w-5 h-5" />
              <span>{user.name || "Account"}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-36 bg-gray-800 shadow-md rounded-md overflow-hidden z-10">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:text-yellow-500 text-left text-white w-full"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </nav>

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
          <Link to="/" className="w-full hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/menu" className="w-full hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Menu</Link>
          <button onClick={() => { scrollToFooter(); setMobileMenu(false); }} className="w-full text-left hover:text-yellow-300">About</button>
          <button onClick={() => { scrollToFooter(); setMobileMenu(false); }} className="w-full text-left hover:text-yellow-300">Contact</button>

          <div className="border-t border-orange-400 w-full pt-3">
            {user ? (
              <div className="flex flex-col space-y-2">
                <span>{user.name || "Account"}</span>
                <button onClick={handleLogout} className="hover:text-yellow-300 text-left">Logout</button>
              </div>
            ) : (
              <>
                <Link to="/user/login" className="block py-2 hover:text-yellow-300" onClick={() => setMobileMenu(false)}>User Login</Link>
                <Link to="/food-partner/login" className="block py-2 hover:text-yellow-300" onClick={() => setMobileMenu(false)}>Admin Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
