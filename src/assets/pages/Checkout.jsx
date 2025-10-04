// // src/pages/Checkout.jsx
// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you could handle payment API etc.
    navigate("/success");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">💳 Checkout</h2>
        <p className="text-gray-600 mb-6">Please enter your delivery and payment details.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Delivery Info */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="123 Street, City"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="+880 1234 567890"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Payment Info */}
          <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-800">Payment Method</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Credit/Debit Card</span>
            </label>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            ✅ Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
