import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <div className="text-green-600 text-6xl mb-4">✅</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your delicious food is on the way 🚴‍♂️💨
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition mb-3"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default Success;
