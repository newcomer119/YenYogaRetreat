// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart state

  // Function to add a course to the cart
  const addToCart = (course) => {
    // Check if the course is already in the cart
    const isCourseInCart = cart.some(item => item.id === course.id);
    if (!isCourseInCart) {
      setCart((prevCart) => [...prevCart, course]); // Add course if not already in cart
    }
  };

  // Function to remove a course from the cart
  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter(course => course.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};