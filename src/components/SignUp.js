// src/components/SignUp.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Sign up successful! Redirecting to sign in...");
      setTimeout(() => {
        navigate('/sign-in');
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", error);
      setMessage("Error signing up: " + error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage("Sign up successful! Redirecting to sign in...");
      setTimeout(() => {
        navigate('/sign-in');
      }, 2000);
    } catch (error) {
      console.error("Error signing up with Google:", error);
      setMessage("Error signing up with Google: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Create Your Account</h1>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <button 
          type="button" 
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center mt-4 bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
        >
          <img 
            src="https://www.svgrepo.com/show/355037/google.svg" 
            alt="Google" 
            className="h-5 w-5 mr-2"
          />
          Sign Up with Google
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/sign-in" className="text-blue-500 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
