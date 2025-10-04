// src/pages/MenuPage.jsx
import React, { useContext, useRef } from "react";
import { dummyRestaurants } from "../../data/dummyResturants";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Footer ref for About/Contact scrolling
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="p-6 text-center bg-orange-500 text-white mb-10">
        <h1 className="text-4xl font-bold">Savor Menu</h1>
        <p>Explore all our amazing restaurants and order your favorite food</p>

        {/* Links to scroll */}
        <div className="mt-4 flex justify-center gap-4">
         
          
        </div>
      </header>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {dummyRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-60 object-cover rounded-t-md"
              />
              {restaurant.tag && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  {restaurant.tag}
                </span>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
              <p className="text-gray-500 text-sm">{restaurant.category}</p>
              <p className="text-sm text-yellow-500">
                ⭐ {restaurant.rating} ({restaurant.reviews})
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {restaurant.discount?.map((d, i) => (
                  <span
                    key={i}
                    className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 border-t">
              <p className="font-bold text-gray-800">৳ {restaurant.price}</p>
              <button
                onClick={() => {
                  addToCart(restaurant);
                  navigate("/cart");
                }}
                className="bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="bg-gray-800 text-white p-10 text-center mt-10"
      >
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Savor is your go-to food delivery platform offering the best restaurants near you.
        </p>
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <p>Email: support@savor.com</p>
        <p>Phone: +880 1234 567890</p>
      </footer>
    </div>
  );
};

export default MenuPage;
