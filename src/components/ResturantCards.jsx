import React, { useContext } from "react";
import { dummyRestaurants } from "../data/dummyResturants";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const RestaurantCard = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6 text-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2 text-white">
          Discover Our Top Dishes
        </h2>
        <p className="text-white max-w-2xl mx-auto">
          Explore these amazing foods, check out our ratings, and enjoy exclusive discounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h2 className="font-bold text-lg text-gray-800">
                {restaurant.name}
              </h2>
              <p className="text-gray-500 text-sm">{restaurant.category}</p>
              <p className="text-sm text-yellow-500">
                ⭐ {restaurant.rating} ({restaurant.reviews})
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {restaurant.discount.map((d, i) => (
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
                  navigate("/");
                }}
                className="bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700"
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
