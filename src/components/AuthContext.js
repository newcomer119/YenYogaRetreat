import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import your Firebase auth instance
import { onAuthStateChanged } from 'firebase/auth';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the current user

  useEffect(() => {
    // Set up an authentication state listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state when authentication state changes
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children} {/* Render the children components */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};