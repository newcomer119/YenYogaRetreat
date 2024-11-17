import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 

const SignIn = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [message, setMessage] = useState(''); // State for success/error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in with email and password
      setMessage("Sign in successful!"); // Set success message
      navigate('/'); // Redirect to the main page (adjust the path as needed)
    } catch (error) {
      console.error("Error signing in:", error); // Handle errors
      if (error.code === 'auth/invalid-credential') {
        setMessage("Invalid email or password. Please try again."); // Specific message for invalid credentials
      } else if (error.code === 'auth/user-not-found') {
        setMessage("No user found with this email. Please register."); // Message for user not found
      } else if (error.code === 'auth/too-many-requests') {
        setMessage("Too many sign-in attempts. Please try again later."); // Specific message for too many requests
      } else {
        setMessage("Error signing in: " + error.message); // Set general error message
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
        {message && <p className="text-red-500 text-center mb-4">{message}</p>} {/* Display success/error message */}
        <form onSubmit={handleSignIn}>
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
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? 
          <a href="/sign-up" className="text-blue-500 hover:underline"> Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;