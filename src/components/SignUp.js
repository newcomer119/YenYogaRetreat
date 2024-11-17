import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SignUp = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [message, setMessage] = useState(''); // State for success/error message
  const navigate = useNavigate(); // Initialize useNavigate

  const provider = new GoogleAuthProvider(); // Create a new instance of GoogleAuthProvider

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Create user with email and password
      setMessage("Sign up successful! Redirecting to sign in..."); // Set success message
      setTimeout(() => {
        navigate('/sign-in'); // Redirect to the sign-in page after a short delay
      }, 2000); // Delay for 2 seconds
    } catch (error) {
      console.error("Error signing up:", error); // Handle errors
      setMessage("Error signing up: " + error.message); // Set error message
    }
  };

  const handleGoogleSignUp = async () => { // Function to handle Google sign-up
    try {
      const result = await signInWithPopup(auth, provider); // Sign in with Google
      setMessage("Sign up successful! Redirecting to sign in..."); // Set success message
      setTimeout(() => {
        navigate('/sign-in'); // Redirect to the sign-in page after a short delay
      }, 2000); // Delay for 2 seconds
    } catch (error) {
      console.error("Error signing up with Google:", error); // Handle errors
      setMessage("Error signing up with Google: " + error.message); // Set error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>} {/* Display success/error message */}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
          
          {/* Google Sign Up Button */}
          <button 
            type="button" 
            onClick={handleGoogleSignUp} // Add onClick handler for Google sign-up
            className="w-full bg-red-500 text-black p-2 rounded hover:bg-red-600 transition duration-200 mt-4"
          >
            Sign Up with Google
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? 
          <a href="/sign-in" className="text-blue-500 hover:underline"> Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;