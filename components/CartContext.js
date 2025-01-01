import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.ID === item.ID);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.ID === item.ID
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemID) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ID !== itemID));
  };

  const updateQuantity = (itemID, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ID === itemID ? { ...item, quantity: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
