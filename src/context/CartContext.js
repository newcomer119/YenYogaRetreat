// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => { // Removed isLoggedIn from props
  const [cart, setCart] = useState([]); // Initialize cart state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  // Function to log in the user
  const login = () => {
    setIsLoggedIn(true); // Update isLoggedIn state to true
  };

  // Function to log out the user
  const logout = () => {
    setIsLoggedIn(false); // Update isLoggedIn state to false
  };

  // Function to add a course to the cart
  const addToCart = (course) => {
    if (!isLoggedIn) { 
        alert('Log in to add to cart'); 
        return; // it will show alert if user is not logged in 
    }
    // Check if the course is already in the cart
    const isCourseInCart = cart.some(item => item.id === course.id);
    if (!isCourseInCart) {
        setCart((prevCart) => [...prevCart, course]); // Add course if not already in cart
        // Removed the message display logic here
    }
  };

  // Function to remove a course from the cart
  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter(course => course.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, isLoggedIn, login, logout }}> {/* Added isLoggedIn, login, and logout to the provider value */}
      {children}
    </CartContext.Provider>
  );
};