import React, { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    // Ensure numeric price
    const price = Number(item.Price) || 0;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id
            ? { ...i, qty: i.qty + 1, Price: price } // update price just in case
            : i
        );
      }
      return [...prevItems, { ...item, qty: 1, Price: price }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  // Calculate total safely
  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = Number(item.Price) || 0;
      const qty = item.qty || 1;
      return sum + price * qty;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
