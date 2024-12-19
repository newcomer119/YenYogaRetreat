// // src/components/SignIn.js
// import React, { useState, useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { CartContext } from '../context/CartContext';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const { login } = useContext(CartContext);

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("userToken") !== null;
//     if (isLoggedIn) {
//       navigate('/');
//     }
//   }, [navigate]);

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       const token = await user.getIdToken();
//       localStorage.setItem("userToken", token);
//       setMessage("Sign in successful!");
//       login();
//       navigate('/');
//     } catch (error) {
//       console.error("Error signing in:", error);
//       if (error.code === 'auth/invalid-credential') {
//         setMessage("Invalid email or password. Please try again.");
//       } else if (error.code === 'auth/user-not-found') {
//         setMessage("No user found with this email. Please register.");
//       } else if (error.code === 'auth/too-many-requests') {
//         setMessage("Too many sign-in attempts. Please try again later.");
//       } else {
//         setMessage("Error signing in: " + error.message);
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-center mb-6">Welcome Back</h1>
//         {message && <p className="text-red-500 text-center mb-4">{message}</p>}
//         <form onSubmit={handleSignIn}>
//           <div className="mb-4">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               required 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <input 
//               type="password" 
//               placeholder="Password" 
//               required 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="text-center mt-4 text-sm text-gray-600">
//           Don't have an account?{' '}
//           <a href="/sign-up" className="text-blue-500 hover:underline">Sign up</a>
//         </p>
//         <div className="flex items-center justify-center mt-6">
//           <div className="border-t border-gray-300 w-1/3"></div>
//           <p className="text-sm text-gray-600 px-4">OR</p>
//           <div className="border-t border-gray-300 w-1/3"></div>
//         </div>
//         <button 
//           className="w-full flex items-center justify-center mt-4 bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
//         >
//           <img 
//             src="https://www.svgrepo.com/show/355037/google.svg" 
//             alt="Google" 
//             className="h-5 w-5 mr-2"
//           />
//           Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
  

import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { CartContext } from '../context/CartContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(CartContext);

  // Get return URL and message from location state
  const returnUrl = location.state?.returnUrl || '/';
  const redirectMessage = location.state?.message;

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(returnUrl);
      }
    });

    // Display redirect message if it exists
    if (redirectMessage) {
      setMessage(redirectMessage);
    }

    return () => unsubscribe();
  }, [navigate, returnUrl, redirectMessage]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("userToken", token);
      
      setMessage("Sign in successful!");
      login();
      
      // Navigate to the return URL or default to home
      navigate(returnUrl);
    } catch (error) {
      console.error("Error signing in:", error);
      switch (error.code) {
        case 'auth/invalid-credential':
          setMessage("Invalid email or password. Please try again.");
          break;
        case 'auth/user-not-found':
          setMessage("No user found with this email. Please register.");
          break;
        case 'auth/too-many-requests':
          setMessage("Too many sign-in attempts. Please try again later.");
          break;
        default:
          setMessage("Error signing in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6">Welcome Back</h1>
        
        {message && (
          <div className={`mb-4 p-3 rounded-lg text-center ${
            message.includes("successful") 
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="Enter your password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className={`w-full bg-blue-600 text-black py-2 rounded-lg transition duration-200 ${
              isLoading 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a 
              href="/sign-up" 
              className="text-blue-500 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                navigate('/sign-up', { 
                  state: { returnUrl, message: 'Please create an account to continue.' }
                });
              }}
            >
              Sign up
            </a>
          </p>
        </div>

        <div className="flex items-center justify-center mt-6">
          <div className="border-t border-gray-300 w-1/3"></div>
          <p className="text-sm text-gray-600 px-4">OR</p>
          <div className="border-t border-gray-300 w-1/3"></div>
        </div>

        <button 
          className="w-full flex items-center justify-center mt-4 bg-white border border-gray-300 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
          disabled={isLoading}
        >
          <img 
            src="https://www.svgrepo.com/show/355037/google.svg" 
            alt="Google" 
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
