import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentProcessing = ({ orderData, userDetails, onSuccess, onError }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      key: "rzp_live_8bkx1MGn5XwODz", // Your Razorpay key
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Course Payment",
      description: "Payment for selected course",
      order_id: orderData.id,
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on('payment.success', function(response) {
      console.log(response);
      onSuccess(response);
      handlePaymentSuccess();
    });

    razorpay.on('payment.failed', function(response) {
      console.error("Payment failed:", response);
      onError(response);
    });

    // Add event listener for page unload
    const handleBeforeUnload = () => {
      window.location.reload();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    razorpay.on('payment.cancel', function() {
      alert("Payment cancelled");
      window.location.reload();
    });

    razorpay.open();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [orderData, userDetails, onSuccess, onError]);

  const handlePaymentSuccess = () => {
    // Logic for successful payment
    navigate("/user-profile");
    onSuccess(); 
  };

  return null; // This component does not render anything
};

export default PaymentProcessing;