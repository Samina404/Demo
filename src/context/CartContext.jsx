import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    toast.success(`${item.title || item.name} added to cart 🛒`);
  };

  // ➖ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(i.qty - 1, 0) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  // 🧹 Clear cart
  const clearCart = () => {
    setCartItems([]);
    toast("🧹 Cart cleared");
  };

  // ✅ Checkout handler
  const handleCheckout = (navigate, isLoggedIn) => {
    if (!isLoggedIn) {
      toast.error("⚠️ You must log in before checkout!");
      navigate("/user/login", { state: { from: "/cart" } });
      return;
    }
    navigate("/checkout");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        handleCheckout,
      }}
    >
      {/* 🔥 Global toaster accessible everywhere */}
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </CartContext.Provider>
  );
};
