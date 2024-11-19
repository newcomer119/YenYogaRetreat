import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const SomeComponent = () => {
  const { login, isLoggedIn } = useContext(CartContext);

  useEffect(() => {
    console.log("isLoggedIn updated:", isLoggedIn);
  }, [isLoggedIn]); // Log whenever isLoggedIn changes

  const handleLogin = () => {
    // Simulate user authentication logic
    const isAuthenticated = true; // Replace with actual authentication logic

    if (isAuthenticated) {
      login(); // Call login function on successful login
    }
  };

  return (
    <button onClick={handleLogin}>Log In</button>
  );
};

export default SomeComponent;