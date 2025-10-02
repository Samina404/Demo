import React from "react";
import { dummyRestaurants } from "../data/dummyResturants"; // import dummy directly

const RestaurantCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {dummyRestaurants.map((restaurant) => (
        <div
          key={restaurant.id}
          className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-white"
        >
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="mt-2 font-bold text-lg">{restaurant.name}</h2>
          <p className="text-gray-500">{restaurant.category}</p>
          <p className="text-sm text-yellow-600">
            ⭐ {restaurant.rating} ({restaurant.reviews})
          </p>

          {/* Discounts */}
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

          {/* Tag */}
          {restaurant.tag && (
            <span className="inline-block mt-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
              {restaurant.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantCard;
