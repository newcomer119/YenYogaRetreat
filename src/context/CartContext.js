// src/context/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from local storage on mount
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(token !== null);
  }, []);

  // Function to log in the user
  const login = () => {
    localStorage.setItem("userToken", "your_token_here");
    setIsLoggedIn(true);
  };

  // Function to log out the user 
  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  // Function to add a course to the cart
  const addToCart = (course) => {
    if (!isLoggedIn) { 
        alert('Log in to add to cart'); 
        return;
    }
    // Check if the course is already in the cart
    const isCourseInCart = cart.some(item => item.id === course.id);
    if (!isCourseInCart) {
        setCart((prevCart) => [...prevCart, course]);
    }
  };

  // Function to remove a course from the cart
  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter(course => course.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, isLoggedIn, login, logout }}>
      {children}
    </CartContext.Provider>
  );
};
