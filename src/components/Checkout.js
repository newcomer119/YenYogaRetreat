// src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext

const Checkout = () => {
  const { cart } = useContext(CartContext); // Access cart state from context

  const handleBuyNow = (course) => {
    // Implement your buy now functionality here
    alert(`Proceeding to buy: ${course.title}`);
    // You can redirect to a payment page or handle the purchase logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty. Please add some courses.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((course, index) => (
              <div key={index} className="bg-white border border-gray-300 shadow-md rounded-lg p-4">
                <h4 className="font-medium text-lg mb-2">{course.title}</h4>
                <p className="text-gray-600 mb-4">{course.desc}</p>
                <button
                  onClick={() => handleBuyNow(course)} // Call buy now function
                  className="w-full bg-blue-500 text-black font-bold py-2 rounded hover:bg-blue-600 transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;