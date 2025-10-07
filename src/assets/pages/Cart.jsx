import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  // Safe total calculation
  const total = cartItems.reduce((sum, item) => {
   const price = Number(item.price ?? item.Price ?? 0);

    const qty = item.qty || 1;
    return sum + price * qty;
  }, 0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate("/user/login", { state: { from: "/checkout" } });
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center bg-white p-8 rounded shadow">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => {
           const price = Number(item.price ?? item.Price ?? 0); 
            const qty = item.qty || 1;
            return (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md p-6 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.title || item.name}</h3>
                  <p className="text-gray-600">৳ {price} each</p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="font-bold">{qty}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                </div>

                <p className="font-bold text-lg">৳ {price * qty}</p>
              </div>
            );
          })}

          {/* Total */}
          <div className="bg-white shadow-md p-6 rounded-lg flex justify-between items-center">
            <h3 className="text-2xl font-bold">Total</h3>
            <p className="text-2xl font-bold text-green-600">৳ {total}</p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Checkout →
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
